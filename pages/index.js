import { withState, compose, lifecycle } from "recompose";
import copyToClipboard from "copy-to-clipboard";
import styled from "styled-components";
import queryString from "query-string";
import NoSSR from "react-no-ssr";
import { Button, Link, Flex } from "kaffebar";

import Page from "../components/Page";
import Toolbar from "../components/Toolbar";
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

const encode = state => encodeURIComponent(JSON.stringify(state));
const decode = str => JSON.parse(decodeURIComponent(str));

const getLinkFromLetter = state =>
  `${window.location.protocol}//${window.location.host}/?l=${encode(state)}`;

const Letter = ({ letter, setLetter }) => (
  <Page>
    <Toolbar>
      <Flex
        style={{
          width: "210mm",
          margin: "0 auto 2em auto",
          alignItems: "center"
        }}
      >
        <Flex.Item>
          <Link href={getLinkFromLetter(letter)} aria-label="plz">
            Permalink
          </Link>
        </Flex.Item>
        <Flex.Item>
          <Button
            type="button"
            onClick={() => copyToClipboard(getLinkFromLetter(letter))}
          >
            Copy link to clipboard
          </Button>
        </Flex.Item>
        <Flex.Item style={{ flex: "1 0 auto", textAlign: "right" }}>
          <Button type="button" onClick={() => window.print()}>
            Print
          </Button>
        </Flex.Item>
      </Flex>
    </Toolbar>
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

const enhance = withState(
  "letter",
  "setLetter",
  ({ initialLetter }) => initialLetter
);

const Component = enhance(Letter);

const IndexPage = ({ url }) => {
  const { asPath } = url;
  const parsed = queryString.parse(asPath.replace("/", ""));
  const initialLetter = parsed.l ? decode(parsed.l) : store;

  return (
    <NoSSR>
      <Component initialLetter={initialLetter} />
    </NoSSR>
  );
};

export default IndexPage;
