import React, { useEffect } from 'react';
import vNode from '../../lib/vue-to-react';
import Lodash_pick from 'lodash/pick';

import ChatLayout from '../../layouts/chat-layout';
// import DefaultLayout from '../../layouts/default-layout';

import {
  children,
  box, container, grid, stack,
  card, sheet,
  hstack, vstack,
  avatar, btn, iconBtn, ty,
  div, img, span, code, p,
} from '../../lib/v-dom-joy';

// import MacOSMenuBar from '../../components/MacOSMenuBar';

// import { useColorScheme } from '@mui/joy/styles';

import { myPage } from '../../components/MyPage';
// import DevDemo from './root-demo';
// import FreeStyleDemo from './root-freestyle';
// import DevFileLoader from './root-dev--file-loader';
// import DevFileReader from './root-dev--file-reader';
// import SchemaEditorPage from './root-schema-editor';

// import AppIntro from './root-home';

// // import { useSelector, useDispatch } from 'react-redux';
// // import { update as updateLocation } from '../../contexts/router-reducer';

// import GlobalValtio from '../../contexts/GlobalValtio';

// import { useHashInfo } from '../../api/router-hooks';
// import { useUserState } from '../../api/user-hooks';
// import { keyFor, urlFor } from '../../api/urls';

// import NotFoundPage from './root-404';
// import LoginPage from './root-login';
// import WorkspacePage from '../workspace/workspace';



export default function Root(props) {

  // const HomeLayout = DefaultLayout;

  // const { hashFrags, queryDict } = useHashInfo();
  // const pageKey = keyFor(hashFrags);
  // const hereIs = (key) => {return pageKey==key;};
  // const pageMap = {
  //   '404': ()=>[
  //     myPage({}, vNode(NotFoundPage)),
  //   ],
  //   'app': ()=>[
  //     myPage({}, vNode(AppIntro)),
  //     // myPage({}, vNode(Demo)),
  //   ],
  //   'home': ()=>[
  //     myPage({}, vNode(AppIntro)),
  //   ],
  //   'freestyle': ()=>[
  //     vNode(FreeStyleDemo),
  //   ],
  //   'schema-editor': ()=>[
  //     myPage({}, vNode(SchemaEditorPage)),
  //   ],
  //   'login': ()=>[
  //     myPage({}, vNode(LoginPage)),
  //   ],
  //   'workspace': ()=>[
  //     vNode(WorkspacePage),
  //   ],
  //   'dev': ()=>[
  //     myPage({}, vNode(DevFileLoader)),
  //     myPage({}, vNode(DevFileReader)),
  //   ],
  //   'dev-demo': ()=>[
  //     vNode(DevDemo),
  //   ],
  // };

  return vNode(ChatLayout);

  // return vNode('div', null, "Hello");

  // return vNode(hereIs('home') ? HomeLayout : DefaultLayout, {}, [
  //   (pageMap?.[pageKey] ?? pageMap['404'])(),
  //   myPage({}, vNode(DevNav)),
  //   // myPage({variant: "soft", color: "neutral", invertedColors: true,}, vNode(TestPageContent)),
  //   // myPage({variant: "solid", color: "info", invertedColors: true,}, vNode(TestPageContent)),
  // ]);
};

