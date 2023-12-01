import dayjs from 'dayjs';
import Link from 'next/link';
import { getUserList } from '@api-server';
import { Typography } from '@components';
import UserAddIcon from './client';

const UserListPage = async () => {
  const data = await getUserList();

  return (
    <div className="relative flex-1 flex flex-col">
      <div className="flex w-full py-2 border-b-1 border-solid">
        <div className="text-center shrink-0 px-2 basis-8">
          <Typography fontSize="sm">no</Typography>
        </div>
        <div className="flex-1 text-center">
          <Typography fontSize="sm">이름</Typography>
        </div>
        <div className="text-center shrink-0 px-2 basis-20">
          <Typography fontSize="sm">가입일</Typography>
        </div>
        <div className="text-center shrink-0 px-2 basis-20">
          <Typography fontSize="sm">최근참여일</Typography>
        </div>
      </div>
      <div className="flex flex-col w-full">
        {data.userList.map((user, index) => (
          <Link key={user.id} className="flex w-full py-2" href={`/user/detail?id=${user.id}`} prefetch={false}>
            <div className="text-center shrink-0 px-2 basis-8">
              <Typography>{index + 1}</Typography>
            </div>
            <div className="flex-1 text-center">
              <Typography>
                {user.name}/{user.age.slice(2, 4)}/{user.address}/{user.gender === 'F' ? '여' : '남'}
              </Typography>
            </div>
            <div className="text-center shrink-0 px-2 basis-20">
              <Typography>{dayjs(user.join_dt).format('YY.MM.DD')}</Typography>
            </div>
            <div className="text-center shrink-0 px-2 basis-20">
              <Typography>23.11.28</Typography>
            </div>
          </Link>
        ))}
      </div>
      <UserAddIcon />
    </div>
  );
};

export default UserListPage;