// import "./App.css";
import { Layout } from "antd";
import MainHeader from "./components/MainHeader";
import MainMenu from "./components/MainMenu";
import MainContent from "./components/MainContent";
import MainFooter from "./components/MainFooter";
import 'antd/dist/antd.css';

const {Sider, Header, Footer, Content} = Layout;

function App() {
  return (
    <>
      <Layout>
        <Sider><MainMenu /></Sider>
        <Layout>
          <Header><MainHeader /></Header>
          <Content><MainContent /></Content>
          <Footer><MainFooter /></Footer>
        </Layout>
      </Layout>      
    </>
  );
}

export default App;
