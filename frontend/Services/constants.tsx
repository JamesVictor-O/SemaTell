import { Market, Category } from "./types";
import type { UserData } from "../types";

export const CATEGORIES: Category[] = [
  "All",
  "Music",
  "Sports",
  "Politics",
  "Tech",
  "Culture",
];

export const MARKETS: Market[] = [
  {
    id: "1",
    category: "Music",
    question: "Will the new album release top the charts in its first week?",
    percentage: 72,
    currentPrediction: "Yes",
    closesIn: "2d 14h",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6ofUQQq_uAD6tBxkbYEU6TaWpY44sQdL0RNbYQ4nlSsjABqFot__zazAncT8ka1DWjE4Tt1F1RI6GNHe0OwUv2crhVQWV4QTID7e9pHjykMsmgxEljwIxFRy6Sd4NDeamHuLyscyp2601Nhdd8iZr04BykFeCGsApL4EJL8SJSPYRlfych77v7csRWt5g-eQhgyLBHDcWeoDBl6a9nLRXhU4QeaykgmdiwBGSZfJpa9ljlSJpYmWLVyB2TMsuSr9o3CTfHkVhkw0",
  },
  {
    id: "2",
    category: "Sports",
    question: "Will the home team win the championship this season?",
    percentage: 45,
    currentPrediction: "No",
    closesIn: "1d 8h",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAYLMaa_o9KMM_QB1EroVmshJahB67htRATAvWQmM7SaLL3EzKBHGqWE07bqjnavlzdvAbLjHXusxTJMpcrOrI11AoEHwAIn6oj2nSpap2ZkGAN-aKID-NmeiEOWKLMUJ7Ewbow_UX96JIwhXNdxCiJzdGeEbQKt83tOKHkui4oR6zji7QTGwV30oN8u4KM7DMAqgBfBuFS1vKfvV0PE9P03AzqM1qEeBluPcpscxqC4Za0SENKUl4h_0gz-kKCrX4Xr99vzHdGyU",
  },
  {
    id: "3",
    category: "Politics",
    question: "Will voter turnout exceed 60% in the upcoming election?",
    percentage: 68,
    currentPrediction: "Yes",
    closesIn: "22h 30m",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQgCxXqOBa4El_-MjnvSj6bnbyelgqZ-GJgcVqGB_1U3fl7zF5LJ1m26lnnPMIP2cZGUG5VotYb8pW25Em9PPwi10DdffbppQVG4s4vgyrBOHsMr0SZAJZHfRDrmdtvukz0bulDp-Jq4_PjqJCf9f-w8nvtV02Lsh0WAkPhGx04Sz2wIlUQ1-C8NZEdoW3HBl_pis-9Pas5KMbC56FvaQ3ltCp-CDWrENKs8-nruZWGaVbsddCrgr042t-6qDbj-iVFCoeEiYjlHI",
  },
];

export const LEADERBOARD_DATA: UserData[] = [
  {
    rank: 1,
    name: 'J. "Prophet" Doe',
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmMKgUyVhXSM1GUKmi0JE4YFlcVYRKrNJpreMVnx6lxNGllYBCG86V06lAu6LkQ-amm_QzTGOuYH2XfOdgyz3O5go4dR9aMfwrLTnSoytpVLSwjDbHptybtzfxH-tJCnz6Q86-iixGA2CrjF_Tk4E1fSEV1fazLS0Dsl6nrFUNc7RvnH1fx2wqapjA1sx2uted8vIHT-TtCdlWbTYZNFoCfiFcrMKthKQKpPdi27yj2oV4r1fwBqdnYBtA6fNqN9S5mPkF_jeyvDE",
    tier: "Master",
    tierColor: "gold",
    tierIcon: "verified",
    accuracy: "98.5%",
    kp: "15,420",
    streak: 12,
  },
  {
    rank: 2,
    name: "Amina Okoro",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArr1oeB7lz2bKlZadbQH3CQzbCKn3G3tkq9VeHXc7Y6NYUYLYgziQEeCbVeIWsBoSZQG85p4AVyF0i14qLA-4uEA1wqh24RqSyv291FGgKBllmoHTFVWH7CWO8nw4RuElSmTK09YL2hAcpQ9XQfX9NH_BEO_9TntghwA2nuxSz0FWNAVtNXd5SHix_fUsj7cd1zY-xpQDvtHdBjfWbTNA3_qjjCZOC-gLGCJWDjhENSt5KQuUPvDKPt_QTJAzD77e8ZOyBVavIszw",
    tier: "Diamond",
    tierColor: "teal",
    tierIcon: "shield",
    accuracy: "96.2%",
    kp: "14,100",
    streak: 8,
  },
  {
    rank: 3,
    name: "Kenji Tanaka",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJZQ6TSr4jgZfHYgb8gTGnPK_2RJF357fM1CmtgK2ya2NsmuqbjVOt_C_kybjJWpv7WxVk4g7ppvunGkGhklH9FG06b6d1di1Er_y4hjGG-CDb-IyXWdZMa0R62TWHnDjERKkD7ug3XO805rxN2Z0f8C_fsKd-1OtMp3Xdh9BXBI9FxzAzNtqLbo0w-0GJ4oVZTkYhduLNBIcqA08Zdvj5Wlv5QVSRy3rrEVo0PkYHIyeU7xaf8KjOjbNXbP-FSQni0J9IHNHUNLE",
    tier: "Diamond",
    tierColor: "teal",
    tierIcon: "shield",
    accuracy: "95.8%",
    kp: "13,850",
    streak: 6,
  },
  {
    rank: 4,
    name: "Ada Lovelace",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDX3J0kjMnXpn8U9gNmhVGbfSTSWIAGI4uaZRyAGhjITNHXxXx4kalYGviVJYQ6g0dweWUIJ5QCVwkp-30hdDw1zJU-nzsl2ZmeG5ZaHVeZNi9PsqzvqplTuWFxy5LTt3tZYHlJKbd_Lk3kr9kloSPsepnaKra2_PRAYTycKRVA4VHiwcwqHtO8wyM7S8C-vWn4XQQ_IFiKzLsjwuXlJrKiNk8sEQWxNFtjPe4r7BVgR3BZZI3T3EYZwVcLEOru_ZiMRtHk2MOMFY0",
    tier: "Platinum",
    tierColor: "teal",
    tierIcon: "shield",
    accuracy: "91.2%",
    kp: "12,345",
    streak: 5,
  },
  {
    rank: 5,
    name: "Grace Hopper",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAhPEtqD1coTAarr2GxZ2jK7fEt3MtOOceoiwxO4Nhkn4DdZyKQRhzYJu_ATj1RSehneXkhB_U4-2hbSqCbmDV3Sw3p0C-mD-52QJCvOio8-UwdeRZXarF6t3GBDbmlzr-etIJmj1Pbq0kkwTMf7cDFtx6YdMn7IONJvsWNnXYvmAtYw-LtgzGD0jLyAR8n2qxqK6g25tShkoEMXjMllFCMV0Ay-hMoy4pD4jYuXZUAV7E2WcHOayt5uhiD5UmYXl-mFfRx_ROpjc",
    tier: "Gold",
    tierColor: "gold",
    tierIcon: "shield",
    accuracy: "89.5%",
    kp: "11,987",
    streak: 0,
  },
  {
    rank: 6,
    name: "You",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6LwAA1F350r7pjSgQhPQw_QmxrZaxEKypKbi1gkdBZ0-stuhEDEciXUdjMLg9n6IETaoDLZS8JbwXd6qSEV_-9awrMF_yiETceQ5c7LEHxrCYSJNMkt4p03fQGtV5acWnRS91cfo81_i0K7aSlzgfunq1NHzdk1EPyQ4XhOuvLIKFQblbZjPyEoI-JL88D49DH2kOYKocFSH0EStMO8Q9gm8GvtMpjgw7y17DC8FsoZHZQAE5PsvjiNTbhtFbEcHUYJzMUZuE2Rc",
    tier: "Gold",
    tierColor: "gold",
    tierIcon: "shield",
    accuracy: "88.1%",
    kp: "11,550",
    streak: 2,
    isCurrentUser: true,
  },
  {
    rank: 7,
    name: "Alan Turing",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSsogYVIPl4Uy7bBiFmO1UeXNuG5cbsUe_tCNLZreuzWbzXVmJeV0kmVMWCjAhEuqrU3jdsBU2ViNweV5_KXf8Ruh0N4XcqYKbNp5T6beWFnSdKIlRuHoOYGO4sfkgEjrKIqf1c0Y-coVuDnvrRtUuWQmQbteJIJimtl58rSjsL0-L0QtgkRexlpU-xh_PdBW98cdDPldn6B69BCvI5DzzWF3jXwZ644qU6xfeFNLrvqTwr0pgWC8fqIf5pY9vA4N5mG0s7-XeSAI",
    tier: "Silver",
    tierColor: "slate",
    tierIcon: "shield",
    accuracy: "87.9%",
    kp: "11,498",
    streak: 0,
  },
  // Add some dummy users to make the list scrollable if needed
  {
    rank: 8,
    name: "Katherine Johnson",
    avatar: "https://picsum.photos/200",
    tier: "Silver",
    tierColor: "slate",
    tierIcon: "shield",
    accuracy: "86.5%",
    kp: "10,920",
    streak: 3,
  },
  {
    rank: 9,
    name: "Margaret Hamilton",
    avatar: "https://picsum.photos/201",
    tier: "Bronze",
    tierColor: "coral",
    tierIcon: "shield",
    accuracy: "85.1%",
    kp: "10,100",
    streak: 1,
  },
];
