import { getPostData } from '@/lib/post';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface PostPageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostData(params.slug);


  if (!postData) {
    notFound();
  }

  return (
    <article className='layout'>
      <h1 className='mt-10 text-center text-[#29407F] font-bold text-[26px]'>{postData.title}</h1>
      <p className=' text-xs text-center'>{postData.date}</p>
      <Image
        src={postData.image}
        alt='article hero image'
        height={60}
        width={1200}
        className='object-contain md:max-w-fit mx-auto my-[20px]'
      />
      <div className='text-justify' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <Image
        src='/homepage/border-horizontal-full.png'
        alt='border horizontal full'
        height={60}
        width={1200}
        className='object-contain my-10'
      />
    </article>
  );
}