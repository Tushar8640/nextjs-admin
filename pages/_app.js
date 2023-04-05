import Layout from "@/components/Layout/Layout";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

function App({ Component, ...rest }) {
  const router = useRouter();
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache: clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <Provider store={store}>
        {router.pathname !== "/" ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </Provider>
    </>
  );
}
export default wrapper.withRedux(App);
