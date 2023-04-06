import Layout from "@/components/Layout/Layout";
import { wrapper } from "@/redux/store";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

function App({ Component, ...rest }) {
  const router = useRouter();
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <>
      <Provider store={store}>
        {router.pathname !== "/" ? (
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
        ) : (
          <Component {...props.pageProps} />
        )}
      </Provider>
    </>
  );
}
export default App;
