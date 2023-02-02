import 'styles/globals.css';
import Layout from 'layout/layout';
import ProfileLayout from 'layout/layout-profile';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }) {
  const {pathname} = useRouter();
  if(pathname.startsWith("/profile")){
    return(
      <ProfileLayout>
        <Component {...pageProps} />
      </ProfileLayout>
    )
  }
  return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
  
}
