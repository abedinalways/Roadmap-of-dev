import { TopicDetail } from '../types';

import { htmlTopic } from './topics/html';
import { jsTopic } from './topics/js';
import { reactTopic } from './topics/react';
import { nextjsTopic } from './topics/nextjs';
import { typescriptTopic } from './topics/typescript';
import { websocketTopic } from './topics/websocket';
import { gsapTopic } from './topics/gsap';
import { performanceTopic } from './topics/performance';
import { testingTopic } from './topics/testing';
import { systemdesignTopic } from './topics/systemdesign';
import { securityTopic } from './topics/security';
import { devopsTopic } from './topics/devops';
import { interviewTopic } from './topics/interview';

export const TOPICS_DATA: Record<string, TopicDetail> = {
  html: htmlTopic,
  js: jsTopic,
  react: reactTopic,
  nextjs: nextjsTopic,
  typescript: typescriptTopic,
  websocket: websocketTopic,
  gsap: gsapTopic,
  performance: performanceTopic,
  testing: testingTopic,
  systemdesign: systemdesignTopic,
  security: securityTopic,
  devops: devopsTopic,
  interview: interviewTopic,
};
