import { IoIosHeartEmpty } from "react-icons/io";
import { GiDogBowl, GiDogHouse } from "react-icons/gi";
import { PiPawPrintThin } from "react-icons/pi";
import { IoEllipsisVertical } from "react-icons/io5";
import { GoReply } from "react-icons/go";
import Image from "next/image";

function Post({ post }) {
  const size = 25;
  return (
    <div className="bg-white  p-4 mb-4 border-t  border-gray-400 py-2">
      <div className="flex items-center mt-8 mb-5">
        <div className="flex flex-1 gap-x-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <Image
               width={16} height={9} layout="responsive"
                alt="product"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">@{post.username}</h3>
            <p className="text-gray-500 text-sm">
              {new Date(post.timestamp).toDateString()}
            </p>
          </div>
        </div>
        <div className="option">
          <IoEllipsisVertical />
        </div>
      </div>
      <div className="content lg:px-10 mx-auto">
        <div className="media overflow-hidden flex  line-clamp-2  gap-6 mt-2 ">
          <Image
           width={16} height={9} layout="responsive"
            className="object-cover w-3/12"
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcSet=""
          />
          <Image
           width={16} height={9} layout="responsive"
            className="object-cover w-32"
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcSet=""
          />
          <Image
           width={16} height={9} layout="responsive"
            className="object-cover w-32"
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcSet=""
          />
          <Image
           width={16} height={9} layout="responsive"
            className="object-cover w-32"
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcSet=""
          />
          <Image
           width={16} height={9} layout="responsive"
            className="object-cover w-32"
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcSet=""
          />
          <Image
                             width={16} height={9} layout="responsive"

            className="object-cover w-32"
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcSet=""
          />
        </div>
        <p className="mt-4  text-gray-700">
          {post.content}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          suscipit fugit maiores voluptas, rem aspernatur, assumenda sunt id
          itaque atque maxime autem sequi cupiditate similique vero? Dolore
          atque repellendus praesentium.
        </p>
        <div className="post_action mt-10 flex justify-between">
          <PiPawPrintThin size={size} />
          <IoIosHeartEmpty size={size} />
          <GiDogBowl size={size} />
          <GoReply size={size} />
          <GiDogHouse size={size} />
        </div>
      </div>

      {/* Add more elements like images, links, etc., as needed */}
    </div>
  );
}

export default Post;
