import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CustomerDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const [users, setUsers] = useState({});
  useEffect(() => {
    const res = axios
      .get(`https://dummyjson.com/users/${slug}`)
      .then((data) => setUsers(data?.data));
  }, [slug]);
  console.log(users);
  const {id,image,firstName,lastName,company,email} = users ||{}
  return (
    <div>
   
      <div className="flex flex-col max-w-lg p-6 bg-gray-50 text-gray-800 mx-auto ">
        <Image
          unoptimized
          width={300}
          height={500}
          src={image}
          alt=""
          className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square"
        />
        <div>
          <h2 className="text-xl font-semibold">{firstName} {lastName}</h2>
          <span className="block pb-2 text-sm text-gray-600">
            {company?.name}
          </span>
          <p>
           Email: {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
