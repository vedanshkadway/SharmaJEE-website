import Image from "next/image";
import { FollowerPointerCard } from "./ui/following-pointer";

interface CourseItem {
  author: string;
  authorAvatar: string;
  courseImg: string;
  image: string;
  title: string;
  description: string;
  price: string;
}

export function CourseList(item: CourseItem) {
  return (
    <div className="w-80 mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={item.author}
            avatar={item.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100 ">
          <Image src={item.courseImg} width={500} height={200} key={Date.now()} alt="hello"/>
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
            <Image
              src={item.image}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {item.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {item.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-xl text-black font-bold">{item.price}</span>
              <div className="relative z-10 px-6 py-3 bg-navy text-white font-bold rounded-xl block text-s">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}



const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
