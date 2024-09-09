'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';

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
  desc: string;
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
      info_from: '',
    },
  });
  const { handleSubmit, trigger, setValue } = form;

  const { mutate, isPending } = useMutationToast<
    undefined,
    BengkelRegistrationForm
  >(
    useMutation({
      mutationFn: (data) =>
        api.post('/bengkel_temp', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
      onSuccess: () => router.push('/'),
    }),

  );

  const onSubmit: SubmitHandler<BengkelRegistrationForm> = async (data) => {
    if (otherService.checked && !!otherService.text) {
      data.list_of_service = [
        ...data.list_of_service.filter((value) => !!value),
        otherService.text,
      ];
      setValue('list_of_service', data.list_of_service);
    }

    // Set info_from to otherSource.text if applicable
    if (otherSource.checked && !!otherSource.text) {
      data.info_from = otherSource.text;
      setValue('info_from', data.info_from);
    }

    // Re-run validation
    const isValid = await trigger(['list_of_service', 'info_from']);
    console.log(form.getValues('info_from'));
    if (isValid) {
      const isPromiseValue = data.is_promise as unknown as string;
      data.is_promise = isPromiseValue === 'iya';
      mutate(data);
    }
  };

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
          Pendaftaran Bengkel
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
            validation={{
              required: 'Email wajib diisi',
            }}
          />

          <Input
            id='name'
            label='Nama'
            placeholder='Masukkan nama bengkel Anda'
            sizes='large'
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
            validation={{
              required: 'Nomor telepon bengkel wajib diisi',
            }}
          />
          <Image src="/deskripsi-bengkel.png" alt="Deskripsi Bengkel" width={290} height={767} className='mx-auto'></Image>
          <Textarea
            id='desc'
            label='Deskripsi Bengkel'
            placeholder='Tuliskan deskripsi bengkel Anda'
            validation={{ required: 'Deskripsi bengkel wajib diisi' }}
          />

          <Input
            id='open_hour'
            type='time'
            label='Jam Buka'
            placeholder='Masukkan jam buka bengkel Anda'
            sizes='large'
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
            validation={{
              required: 'Jam tutup bengkel wajib diisi',
            }}
          />

          <div className='space-y-2'>
            <p className='text-sm font-medium text-gray-500'>Jenis Bengkel</p>

            <Checkbox
              name='type'
              label='Mobil'
              value='mobil'
              hideError
              containerClassname='gap-3 px-1 w-fit'
              validation={{ required: 'Tipe bengkel wajib diisi' }}
            />

            <Checkbox
              name='type'
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
            validation={{ required: 'Foto bengkel wajib diisi' }}
            accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
          />

          <div className='space-y-2'>
            <p className='text-sm font-medium text-gray-500'>
              Servis yang tersedia
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
                value={otherService.text}
                containerClassname='gap-3 px-1'
                validation={{
                  validate: validateListOfService,
                }}
                onChange={(e) =>
                  setOtherService((prev) => ({
                    ...prev,
                    checked: e.target.checked,
                  }))
                }
                customLabel={
                  <input
                    type='text'
                    onChange={(e) => {
                      setOtherService((prev) => ({
                        ...prev,
                        text: e.target.value,
                      }));
                    }}
                    placeholder='yang lain, format: "Servis 1, Servis 2"'
                    className='flex w-full !bg-transparent text-gray-800 border-0 border-b-2 border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-0 ring-primary-500 caret-primary-800 placeholder:text-gray-400 p-0'
                  />
                }
              />
            </div>
          </div>

          <div className='space-y-2 p-4 rounded-lg border-2 border-gray-200 bg-white'>
            <p className='text-gray-800'>
              Apakah anda berjanji untuk mendownload aplikasi BengCare dan
              menggunakannya
            </p>

            <Radio
              name='is_promise'
              label='Iya'
              value='iya'
              hideError
              validation={{ required: 'Perjanjian ini wajib diisi' }}
            />

            <Radio
              name='is_promise'
              label='Tidak'
              value='tidak'
              validation={{ required: 'Perjanjian ini wajib diisi' }}
            />
          </div>

          <div className='space-y-2'>
            <p className='text-sm font-medium text-gray-500'>
              Dari mana Anda tahu BengCare?
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
              />
            ))}

            <div className='inline-flex items-center gap-2'>
              <Radio
                name='info_from'
                label={null}
                value={undefined}
                checked={otherSource.checked}
                onChange={(e) =>
                  setOtherSource((prev) => ({
                    ...prev,
                    checked: e.target.checked,
                  }))
                }
                customLabel={
                  <input
                    type='text'
                    onChange={(e) => {
                      setOtherSource((prev) => ({
                        ...prev,
                        text: e.target.value,
                      }));
                    }}
                    placeholder='Website, iklan, dll'
                    className='flex w-full !bg-transparent text-gray-800 border-0 border-b-2 border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-0 ring-primary-500 caret-primary-800 placeholder:text-gray-400 p-0'
                  />
                }
              />
            </div>
          </div>

          <Input
            id='referral_code'
            label='Kode Referral atau Pemberi Rekomendasi'
            placeholder='Masukkan kode referral atau nama orang yang merekomendasikan BengCare'
            sizes='large'
          />

          <Button
            type='submit'
            className='w-full'
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
