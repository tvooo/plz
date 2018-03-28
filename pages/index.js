import { withState } from "recompose";
import copyToClipboard from "copy-to-clipboard";
import styled from "styled-components";

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
import { Buffer } from "buffer/";
import store from "../store/default";

const encode = state => {
  let objJsonStr = JSON.stringify(state);
  let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
  return encodeURI(objJsonB64);
};

const decode = str => {
  const buffer = new Buffer(decodeURI(str), "base64").toString("utf8");
  return JSON.parse(buffer);
};

const Button = styled.button`
  color: #268ec6;
  text-decoration: underline;
  border: 0;
  outline: 0;
  display: inline-block;
  background: transparent;
  cursor: pointer;
`;

const getLinkFromLetter = state =>
  `${window.location.protocol}//${window.location.host}/?l=${encode(state)}`;

const Letter = ({ letter, setLetter }) => (
  <Page>
    <div style={{ width: "210mm", margin: "0 auto 1em auto" }}>
      <Button
        type="button"
        onClick={() => copyToClipboard(getLinkFromLetter(letter))}
      >
        Copy permalink to clipboard
      </Button>
    </div>
    <A4>
      <Header>
        <From
          html={letter.from}
          onChange={evt =>
            setLetter({ ...letter, from: evt.target.value || "" })
          }
        />
        <To
          html={letter.to}
          onChange={evt => setLetter({ ...letter, to: evt.target.value || "" })}
        />
      </Header>
      <Main>
        <Subject
          html={letter.subject}
          onChange={evt =>
            setLetter({ ...letter, subject: evt.target.value || "" })
          }
        />
        <Date
          html={letter.date}
          onChange={evt =>
            setLetter({ ...letter, date: evt.target.value || "" })
          }
        />
        <Text
          html={letter.text}
          onChange={evt =>
            setLetter({ ...letter, text: evt.target.value || "" })
          }
        />
        <Closing
          html={letter.closing}
          onChange={evt =>
            setLetter({ ...letter, closing: evt.target.value || "" })
          }
        />
        <Signature
          html={letter.signature}
          onChange={evt =>
            setLetter({ ...letter, signature: evt.target.value || "" })
          }
        />
      </Main>
    </A4>
  </Page>
);

const IndexPage = ({ url }) => {
  const { query } = url;
  const initialLetter = query.l ? decode(query.l) : store;
  const enhance = withState("letter", "setLetter", initialLetter);
  const Component = enhance(Letter);

  return <Component />;
};

export default IndexPage;
