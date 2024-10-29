import React, { useState } from 'react';
import axios from 'axios';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const S3_BUCKET = 'isaac-s3-4646';
const REGION = 'us-east-1';

// Configure the AWS S3 client
const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: 'AKIAXYKJWBSSJSKB2ALA',
    secretAccessKey: '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',
  },
});

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false); // New state to track visibility
  const [downloadLink, setDownloadLink] = useState(''); // New state to store the download link

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
    setProgress(0);  // Reset progress when selecting a new file
  };

  const uploadFile = async () => {
    if (!selectedFile) {
      setMessage('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setMessage('');

    const params = {
      Bucket: S3_BUCKET,
      Key: selectedFile.name,
      Body: selectedFile,
      ContentType: selectedFile.type,
      ACL: 'public-read', // Add this line to make the file publicly accessible
    };

    try {
      // Generate a presigned URL using AWS SDK v3 and use axios for upload to track progress
      const presignedUrl = await getPresignedUrlForUpload(params);
      
      await axios.put(presignedUrl, selectedFile, {
        headers: {
          'Content-Type': selectedFile.type,
        },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentage); // Update progress bar based on the percentage
        },
      });
      
      const fileUrl = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${selectedFile.name}`;
      setDownloadLink(fileUrl); // Set the download link
      setMessage(`File uploaded successfully: ${selectedFile.name}`);
      
      // Close the component after successful upload
      
    } catch (err) {
      console.error('Error uploading file:', err);
      setMessage('Error uploading file.');
    }

    setUploading(false);
  };

  // Updated method to generate presigned URL using getSignedUrl from s3-request-presigner
  const getPresignedUrlForUpload = async (params) => {
    const command = new PutObjectCommand({
      Bucket: params.Bucket,
      Key: params.Key,
      ContentType: params.ContentType,
    });
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    return url;
  };

  // Function to manually close the component
  const closeComponent = () => {
    setIsVisible(false);
    setMessage('');
    setSelectedFile(null); //HERE
    setDownloadLink(''); // Reset the download link when the component is closed
  };

  // Function to toggle the visibility of the component
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
    if (!isVisible) {
        setMessage(''); // Reset the message when the component is opened again
        setDownloadLink(''); // Reset the download link when the component is closed
      }
    };

  return (
    <div>
      {isVisible ? (
        <div>
          <input type="file" onChange={handleFileInput} />
          <button onClick={uploadFile} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
          <button onClick={closeComponent} style={{ marginLeft: '10px' }}>
            Close
          </button>

          {/* Display progress bar when uploading */}
          {uploading && (
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
          )}

          {message && <p>{message}</p>}

          {/* Display download link after successful upload */}
          {downloadLink && (
            <p>
              <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                Download your file
              </a>
            </p>
          )}

          {/* Styles for progress bar */}
          <style jsx>{`
            .progress-bar-container {
              width: 100%;
              background-color: #f3f3f3;
              border-radius: 4px;
              margin-top: 10px;
            }

            .progress-bar {
              width: 0;
              height: 20px;
              background-color: #4caf50;
              border-radius: 4px;
              transition: width 0.3s ease;
            }
          `}</style>
        </div>
      ) : (
        <button onClick={toggleVisibility}>Select file to Upload</button> // Button to reopen the upload component
      )}
    </div>
  );
};

export default FileUpload;
