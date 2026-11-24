export const DATA = {
  id: 'dsh-tinnitus',
  name: '耳鸣',
  prefix: 'tinnitus',
  label: '耳鸣',
  defaultEeriness: 3,
  gain: 0.26,
  flareChance: 0.24,
  flareGain: 18,
  triggerWeight: 0.9,
  flareWeight: 0.9,
  reliefs: [
    { id: 'noise', label: '开点白噪音', relief: 20, minutes: 35, calm: 8 },
    { id: 'move', label: '换个环境', relief: 14, minutes: 25, calm: 5 },
    { id: 'rub', label: '揉一揉耳后', relief: 10, minutes: 15, calm: 4 },
  ],
  body: {
    stiff: '右耳里有很细的一声，像老电视没关，安静下来才听得出。',
    ache: '那声一直没停，越安静越响；听人说话得偏一下头，尾音才接得住。',
    flare: '尖鸣一下盖过了大半句话，只捞到几个字；只能让人再说一遍。',
  },
  voice: {
    base: '允许把用户刚说过的一小段再问一次（「你刚说——」），一条回复最多一次；别把听不清演成冷淡。',
    flare: '允许重复一个词、允许先按听到的半句作答再把后半句补上；不要描述耳朵里面。',
  },
}
