// Collect all FTL event IDs for Rian's events from tournament schedule pages
// Run via browser automation

const tournaments = {
  // 2025-26 season
  "39F98153EDEE4D78AFB3CF775E50FB5D": { name: "May SJCC 2025", events: ["Cadet Men's Saber", "Junior Men's Saber"] },
  "13C006A3EED94A6CA75643E2397DFBB1": { name: "March NAC 2025", events: ["Y-14 Men's Saber", "Cadet Men's Saber"] },
  "85768987D5DF4E06844B3B37F8A4BB65": { name: "Fairfax Challenge Mar 2025", events: ["Y-14 Men's Saber"] },
  "BAF1FBDF82D24E14A07DD357233AE13C": { name: "Capitol Clash Jan 2025", events: ["Y-14 Men's Saber"] },
  "57992ACF5BB44395BAB34E00FABD6663": { name: "JO & Div1 NAC Feb 2025", events: ["Cadet Men's Saber", "Junior Men's Saber"] },
  "D6BC6A0A98924D8A86252802703661DD": { name: "Dec SJCC 2024", events: ["Cadet Men's Saber", "Junior Men's Saber"] },
  "72AA407F9A2A40D18C9F41DEC2F291CC": { name: "Cobra Challenge Nov 2024", events: ["Y-14 Men's Saber", "Cadet Men's Saber"] },
  "25C7B11215AA40298E2A5132EA233367": { name: "Nov NAC 2024", events: ["Cadet Men's Saber"] },
  "59BD75C930244B1BA4B1A23F1F851E46": { name: "Oct NAC 2024", events: ["Cadet Men's Saber"] },

  // 2024-25 season
  "4E956927CD4A46AE825B27AC6F2FDD52": { name: "Summer Nationals 2024", events: ["Y-12 Men's Saber", "Y-14 Men's Saber", "Cadet Men's Saber"] },
  "DB592F3EFD6644238536B1377D4E1669": { name: "March SJCC 2024", events: ["Y-14 Men's Saber", "Cadet Men's Saber"] },
  "51D33D1C1E2A46C7ACC33C3C9C5DEE66": { name: "March NAC 2024", events: ["Y-12 Men's Saber", "Y-14 Men's Saber", "Cadet Men's Saber"] },
  "A9BF6BA189074762829776026A8B7ACC": { name: "Fairfax Challenge Jan 2024", events: ["Y-14 Men's Saber"] },
  "F917D553573B4D55A1123DA42AF24DE0": { name: "Capitol Clash Jan 2024", events: ["Y-14 Men's Saber", "Y-12 Men's Saber"] },

  // 2023-24 season
  "8802E95137B64837B007E2603DBB5D7F": { name: "Summer Nationals 2023", events: ["Y-12 Men's Saber"] },
  "494E30B75B5846B9BC3FA51B8600075C": { name: "March NAC 2023", events: ["Y-12 Men's Saber"] },
  "15D1BB90836A4F66A873CAAB22848990": { name: "JO Feb 2023", events: ["Y-12 Men's Saber"] },
  "818754D70B1A4230B60A5F4AF82CD939": { name: "Capitol Clash Jan 2023", events: ["Y-12 Men's Saber"] },
  "EF1D027F037D46379F03288E3CFA1884": { name: "Dec SJCC 2023", events: ["Y-14 Men's Saber"] },
  "D368ECA375704423B6A7EE758341514A": { name: "Cobra Challenge Nov 2023", events: ["Y-14 Men's Saber", "Y-12 Men's Saber"] },
  "918FB47494134D858820F752F2D02DA2": { name: "Nov NAC 2023", events: ["Cadet Men's Saber"] },
  "55F5A95C43E143BAA8F52D70D4A883AF": { name: "Oct NAC 2023", events: ["Cadet Men's Saber", "Y-14 Men's Saber"] },

  // 2022-23 season
  "9C4CF08096E74AE4BCAFC759EE9FE9B7": { name: "Cobra Challenge Nov 2022", events: ["Y-12 Men's Saber"] },
  "D13F8EFF2ACB4942B20EC934B97142FD": { name: "Fairfax Challenge Sep 2022", events: ["Y-12 Men's Saber", "Y-14 Men's Saber"] },
  "A49E8E2335BB47A8ABD0DF5B0A510FD8": { name: "Oct NAC 2022", events: ["Y-12 Men's Saber"] },
  "13AC595CEE6B435E94AEF383E62E321A": { name: "Dec NAC 2022", events: ["Y-12 Men's Saber"] },
  "FE4265C0C3A24782A47D6E32BA4615B2": { name: "March NAC 2022", events: ["Y-12 Men's Saber"] },
  "710CBF49432F49039398A6E12ECD6BDF": { name: "Fairfax Challenge May 2022", events: ["Y-12 Men's Saber", "Y-10 Men's Saber"] },

  // Early events
  "64552291C03F481C9344577BAEC478FC": { name: "Cobra Challenge Nov 2018", events: ["Y-8 Men's Saber"] },
  "C17A10508CF946799DC2D63568A71076": { name: "Cobra Challenge Nov 2019", events: ["Y-8 Men's Saber", "Y-10 Men's Saber"] },
  "6F11429B72394E68B3F3439BF5770F5A": { name: "Capitol Clash Jan 2020", events: ["Y-8 Men's Saber", "Y-10 Men's Saber"] },
  "6771D8350C154818AF5D6F97CC45BAB7": { name: "Cobra Challenge May 2021", events: ["Y-10 Men's Saber"] },
  "5D2A40EAB0784188BDEDF9E52D46BCBF": { name: "Fairfax Challenge Jun 2021", events: ["Y-10 Men's Saber"] },
};

console.log(JSON.stringify(tournaments, null, 2));
