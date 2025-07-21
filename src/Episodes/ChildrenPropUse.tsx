import type { ReactNode } from 'react';

type ArticleProps = {
  children: ReactNode;
  // children: JSX.Element; // This line is not necessary, as children can be of type ReactNode
};

// خوبی ریاکت نود اینکه میتونی هر چیزی رو به عنوان چایلد پاس کنی
// اما جی اس ایکس دات المنت فقط تگ قبول میکنه

const ChildrenPropUse = ({ children }: ArticleProps) => <h1 className='text-6xl capitalize'>child prop: {children}</h1>

export default ChildrenPropUse;