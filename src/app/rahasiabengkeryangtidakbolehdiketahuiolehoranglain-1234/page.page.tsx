'use client';
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation'; // Use this for accessing query parameters
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';

import api from '@/lib/api'; // Ensure your API client is imported correctly

interface Image {
  image_name: string;
  image_path: string;
}

interface Bengkel {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  open_hour: string;
  close_hour: string;
  available_vehicle_type: string[];
  images: Image[];
  list_of_service: string[];
  is_promise: boolean;
  info_from: string;
}

function toTitleCase(str: string) {
  return str
    .toLowerCase() // Convert the entire string to lowercase
    .split(' ') // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back into a single string
}

export const metadata: Metadata = {
  title: 'Bengkel List',
  robots: {
    index: false,
  },
};

const BengkelTempPage = () => {
  const [data, setData] = useState<Bengkel[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const password = searchParams.get('password');

  useEffect(() => {
    // Check for password validity
    const validPassword = 'your-secret-password-1234!-1231'; // Replace with your actual password logic
    if (password === validPassword) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [password]);

  useEffect(() => {
    // Fetch data only if the password is valid
    if (passwordValid) {
      const fetchData = async () => {
        try {
          const res = await api.get('/bengkel_temp');
          if (res.data.status) {
            setData(res.data.data);
          } else {
            setError('Failed to fetch data');
          }
        } catch (err) {
          setError('Error fetching data');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [passwordValid]);

  if (!passwordValid) {
    return <p>Failed to fetch data</p>;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className='layout pb-10'>
        {data && data.length > 0 ? (
          <ul>
            {data.map((bengkel, index) => (
              <li key={bengkel.id} className='mt-10'>
                <h2 className='text-xl font-bold'>
                  {index + 1}. {toTitleCase(bengkel.name)}
                </h2>
                <p>
                  <strong>Address:</strong> {bengkel.address}
                </p>
                <p>
                  <strong>Description:</strong> {bengkel.description}
                </p>
                <p>
                  <strong>Open Hours:</strong> {bengkel.open_hour} -{' '}
                  {bengkel.close_hour}
                </p>
                <p>
                  <strong>Available Vehicle Types:</strong>{' '}
                  {bengkel.available_vehicle_type.join(', ')}
                </p>
                <p>
                  <strong>Info From:</strong> {bengkel.info_from}
                </p>

                <div className='images'>
                  {bengkel.images.map((img, index) => (
                    <p key={index}>- {img.image_path}</p>
                  ))}
                </div>

                <div className='services'>
                  <p className='font-bold'>Services Offered:</p>
                  <ul>
                    {bengkel.list_of_service.map((service, index) => (
                      <li key={index}>- {service}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

const BengkelTempPageWrapper = () => {
  return (
    <Suspense>
      <BengkelTempPage />
    </Suspense>
  );
};

export default BengkelTempPageWrapper;
