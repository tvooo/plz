import Page from "../components/Page";
import A4 from "../components/A4";
import From from "../components/From";
import To from "../components/To";
import Subject from "../components/Subject";
import Header from "../components/Header";
import Main from "../components/Main";
import Date from "../components/Date";
import Closing from "../components/Closing";
import Signature from "../components/Signature";
import Text from "../components/Text";

import store from "../store/default";

// const ntobr = s => s.replace()

export default () => (
  <Page>
    Copy permalink
    <A4>
      <Header>
        <From>{store.from}</From>
        <To>{store.to}</To>
      </Header>
      <Main>
        <Subject>{store.subject}</Subject>
        <Date>4 June 1991</Date>
        <Text>{store.text}</Text>
        <Closing>{store.closing}</Closing>
        <Signature>{store.signature}</Signature>
      </Main>
    </A4>
  </Page>
);
