'use client';

import { useMutation } from '@tanstack/react-query';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/Input';
import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';

export type SubscriptionFormProps = {
  email: string;
  files: string;
};

export default function SubscriptionForm() {
  const form = useForm<SubscriptionFormProps>();
  const { handleSubmit } = form;

  const { mutate, isPending } = useMutationToast<
    undefined,
    SubscriptionFormProps
  >(
    useMutation({ mutationFn: (data) => api.post('/user/send_to_mail', data) }),
    {
      loading: 'Mendaftarkan...',
      success: 'Terima kasih sudah mendaftar!',
      error: 'Terjadi kesalahan. Coba lagi nanti.',
    },
  );

  const onSubmit: SubmitHandler<SubscriptionFormProps> = (data) => {
    data.files = 'send_mail_web';
    mutate(data);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-start gap-4'
      >
        <Input
          id='email'
          type='email'
          label={null}
          placeholder='Masukkan email Anda'
          img={{
            src: '/homepage/email-icon.png',
            width: 40,
            height: 40,
            alt: 'Email Icon',
          }}
          className='pl-11'
          containerClassName='flex-1'
          validation={{ required: 'Email tidak boleh kosong' }}
        />

        <Button type='submit' isPending={isPending} className='uppercase'>
          Gabung
        </Button>
      </form>
    </FormProvider>
  );
}
