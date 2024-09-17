'use client';

import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import DropzoneInput, { FileWithPreview } from '@/components/Dropzone';
import Input from '@/components/Input';
import Radio from '@/components/Radio';
import Textarea from '@/components/TextArea';
import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';

type BengkelRegistrationForm = {
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  open_hour: string;
  close_hour: string;
  available_vehicle_type: string[];
  images: FileWithPreview[];
  list_of_service: string[];
  is_promise: boolean;
  info_from: string;
  referral_code: string;
};

export const AVAILABLE_SERVICES = [
  'Regular Maintenance',
  'Ganti Oli',
  'Tune Up Mesin',
  'Perbaikan AC Mobil',
  'Ganti Aki/Baterai',
  'Wheel Alignment',
  'Perbaikan Transmisi',
  'Perbaikan Suspensi',
  'Body Repair',
  'Body Paint',
  'Perbaikan Sistem Listrik',
  'Penggantian Sabuk dan Selang',
  'Perbaikan Sistem Knalpot',
];

export const INFORMATION_SOURCES = [
  'Instagram',
  'Facebook',
  'Twitter',
  'Tiktok',
  'Teman',
  'Tim BengCare',
];

export default function BengkelRegistrationPage() {
  const router = useRouter();

  const [otherService, setOtherService] = React.useState({
    checked: false,
    text: '',
  });

  const [otherSource, setOtherSource] = React.useState({
    checked: false,
    text: '',
  });

  const form = useForm<BengkelRegistrationForm>({
    defaultValues: {
      list_of_service: [],
      info_from: undefined,
      images: [],
    },
  });

  const { handleSubmit, setValue, watch, resetField } = form;
  const code = watch('referral_code');

  const { mutate, isPending } = useMutationToast<
    undefined,
    BengkelRegistrationForm
  >(
    useMutation({
      mutationFn: (data) => {
        const formattedData = {
          ...data,
          available_vehicle_type: data['available_vehicle_type'].join(', '),
          list_of_service: data['list_of_service'].join(', '),
          images: data['images'] || [],
        };

        return api.post('/bengkel_temp', formattedData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      },
      onSuccess: () => router.push('/'),
    }),
  );

  const onSubmit: SubmitHandler<BengkelRegistrationForm> = async (data) => {
    const isPromiseValue = data.is_promise as unknown as string;
    data.is_promise = isPromiseValue === 'iya';

    mutate(data);
  };

  const { mutate: checkReferralCode, isPending: checkReferralCodeIsPending } =
    useMutationToast<undefined, string>(
      useMutation({
        mutationFn: (data) => api.get(`/referral/check/${data}`),
        onError: () => resetField('referral_code'),
      }),
      { loading: 'Memeriksa...' },
    );

  const validateListOfService = (list: string[]) => {
    const isServiceSelected = list.length > 0;

    const isOtherServiceValid =
      !otherService.checked ||
      (otherService.checked && otherService.text.trim() !== '');

    if (!isServiceSelected && !isOtherServiceValid) {
      return 'Pilih minimal satu servis atau isi yang lainnya dengan benar';
    }
    if (!isServiceSelected) {
      return 'Pilih minimal satu servis';
    }
    if (!isOtherServiceValid) {
      return 'Isi layanan lainnya jika dipilih';
    }
    return true;
  };

  const validateInfoFrom = (value: string) => {
    if (value == undefined || value.trim() == '') {
      return 'Pilih sumber informasi yang valid';
    }
    if (otherSource.checked && otherSource.text.trim() === '') {
      return 'Isi "lainnya" jika dipilih';
    }
    return true;
  };

  return (
    <main className='layout py-10 space-y-6'>
      <div className='space-y-3 text-center'>
        <h1 className='uppercase text-4xl font-semibold'>
          Pendaftaran Awal Bengkel
        </h1>

        <p>Daftarkan bengkel Anda dengan mengisi formulir di bawah ini</p>
      </div>

      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='space-y-6 max-w-2xl mx-auto'
        >
          <Input
            id='email'
            type='email'
            label='Email'
            placeholder='Masukkan email Anda'
            sizes='large'
            required
            validation={{
              required: 'Email wajib diisi',
            }}
          />

          <Input
            id='name'
            label='Nama'
            placeholder='Masukkan nama bengkel Anda'
            sizes='large'
            required
            validation={{
              required: 'Nama bengkel wajib diisi',
            }}
          />

          <Input
            id='phone'
            type='tel'
            label='Nomor Telepon'
            placeholder='Masukkan nomor telepon bengkel Anda'
            sizes='large'
            required
            validation={{
              required: 'Nomor telepon bengkel wajib diisi',
            }}
          />

          <Input
            id='address'
            type='address'
            label='Alamat'
            placeholder='Masukkan alamat bengkel Anda'
            sizes='large'
            required
            validation={{
              required: 'Alamat bengkel wajib diisi',
            }}
          />

          <Image
            src='/deskripsi-bengkel.png'
            alt='Deskripsi Bengkel'
            width={290}
            height={767}
            className='mx-auto'
          />

          <Textarea
            id='description'
            label='Deskripsi Bengkel'
            placeholder='Tuliskan deskripsi bengkel Anda'
            required
            validation={{ required: 'Deskripsi bengkel wajib diisi' }}
          />

          <Input
            id='open_hour'
            type='time'
            label='Jam Buka'
            placeholder='Masukkan jam buka bengkel Anda'
            sizes='large'
            required
            validation={{
              required: 'Jam buka bengkel wajib diisi',
            }}
          />

          <Input
            id='close_hour'
            type='time'
            label='Jam Tutup'
            placeholder='Masukkan jam tutup bengkel Anda'
            sizes='large'
            required
            validation={{
              required: 'Jam tutup bengkel wajib diisi',
            }}
          />

          <div className='space-y-2'>
            <p className='text-sm font-medium text-gray-500'>
              Jenis Bengkel <span className='text-red-500 ml-1'>*</span>
            </p>

            <Checkbox
              name='available_vehicle_type'
              label='Mobil'
              value='mobil'
              hideError
              containerClassname='gap-3 px-1 w-fit'
              validation={{ required: 'Tipe bengkel wajib diisi' }}
            />

            <Checkbox
              name='available_vehicle_type'
              label='Motor'
              value='motor'
              containerClassname='gap-3 px-1 w-fit'
              validation={{ required: 'Tipe bengkel wajib diisi' }}
            />
          </div>

          <DropzoneInput
            id='images'
            label='Foto Bengkel'
            maxFiles={5}
            maxSize={10000000}
            accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
          />

          <div className='space-y-2'>
            <p className='text-sm font-medium text-gray-500'>
              Servis yang tersedia <span className='text-red-500 ml-1'>*</span>
            </p>

            {AVAILABLE_SERVICES.map((value, index) => (
              <Checkbox
                key={index}
                name='list_of_service'
                label={value}
                value={value}
                hideError
                validation={{
                  validate: validateListOfService,
                }}
                containerClassname='gap-3 px-1 w-fit'
              />
            ))}

            <div className='inline-flex items-center gap-2 w-full'>
              <Checkbox
                name='list_of_service'
                label={null}
                containerClassname='gap-3 px-1'
                value={otherService.text}
                checked={watch('list_of_service').includes(otherService.text)}
                validation={{
                  validate: validateListOfService,
                }}
                onChange={(e) => {
                  const checked = e.target.checked;
                  const currentValues = watch('list_of_service') || [];

                  setOtherService((prev) => ({
                    ...prev,
                    checked: checked,
                  }));

                  if (checked) {
                    setValue('list_of_service', [
                      ...currentValues,
                      otherService.text,
                    ]);
                  } else {
                    setValue(
                      'list_of_service',
                      currentValues.filter(
                        (value) => value !== otherService.text,
                      ),
                    );
                  }
                }}
                customLabel={
                  <input
                    type='text'
                    value={otherService.text}
                    onChange={(e) => {
                      const newText = e.target.value;

                      setOtherService((prev) => ({
                        ...prev,
                        text: newText,
                      }));

                      const currentValues = watch('list_of_service');
                      if (otherService.checked) {
                        const updatedValues = currentValues.filter(
                          (value) => value !== otherService.text,
                        );
                        setValue('list_of_service', [
                          ...updatedValues,
                          newText,
                        ]);
                      }
                    }}
                    placeholder='yang lain, format: "Servis 1, Servis 2"'
                    className='flex w-full !bg-transparent text-gray-800 border-0 border-b border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-0 ring-primary-500 caret-primary-800 placeholder:text-gray-400 p-0'
                  />
                }
              />
            </div>
          </div>

          <div className='space-y-2 p-4 rounded-lg border border-gray-200 bg-white'>
            <p className='text-gray-800'>
              Apakah anda tertarik untuk menggunakan aplikasi BengCare nantinya?
              <span className='text-red-500 ml-1'>*</span>
            </p>

            <Radio
              name='is_promise'
              label='Iya'
              value='iya'
              hideError
              validation={{ required: 'Bagian ini wajib diisi' }}
            />

            <Radio
              name='is_promise'
              label='Tidak'
              value='tidak'
              validation={{ required: 'Bagian ini wajib diisi' }}
            />
          </div>

          <div className='space-y-2'>
            <p className='text-sm font-medium text-gray-500'>
              Dari mana Anda tahu BengCare?
              <span className='text-red-500 ml-1'>*</span>
            </p>

            {INFORMATION_SOURCES.map((value, index) => (
              <Radio
                key={index}
                name='info_from'
                label={value}
                value={value}
                hideError
                validation={{
                  validate: (value) => validateInfoFrom(value),
                }}
                onChange={() => {
                  setOtherSource((prev) => ({
                    ...prev,
                    checked: false,
                  }));
                  setValue('info_from', value);
                }}
              />
            ))}

            <div className='inline-flex items-center gap-2'>
              <Radio
                name='info_from'
                label={null}
                value={otherSource.text}
                checked={otherSource.checked}
                onChange={(e) => {
                  setOtherSource((prev) => ({
                    ...prev,
                    checked: e.target.checked,
                  }));
                  setValue('info_from', otherSource.text);
                }}
                customLabel={
                  <input
                    type='text'
                    onChange={(e) => {
                      setOtherSource((prev) => {
                        if (!!e.target.value) {
                          setValue('info_from', e.target.value);
                          return {
                            checked: true,
                            text: e.target.value,
                          };
                        }

                        return {
                          ...prev,
                          text: e.target.value,
                        };
                      });
                    }}
                    placeholder='Website, iklan, dll'
                    className='flex w-full !bg-transparent text-gray-800 border-0 border-b border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-0 ring-primary-500 caret-primary-800 placeholder:text-gray-400 p-0'
                  />
                }
              />
            </div>
          </div>

          <div className='flex items-end gap-3'>
            <Input
              id='referral_code'
              label='Kode Referral'
              placeholder='Masukkan kode referral jika ada'
              sizes='large'
              containerClassName='flex-1'
              onChange={(event) => {
                setValue('referral_code', event.target.value.toUpperCase());
              }}
            />

            <Button
              type='button'
              className='min-h-12'
              disabled={!code || checkReferralCodeIsPending}
              isPending={checkReferralCodeIsPending}
              onClick={() => checkReferralCode(code)}
            >
              Periksa
            </Button>
          </div>

          <Button
            type='submit'
            className='w-full min-h-12'
            isPending={isPending}
            disabled={isPending}
          >
            Daftar
          </Button>
        </form>
      </FormProvider>
    </main>
  );
}
