export type FactVariantType = {
  index: number;
  text: string;
  description: string;
}

export type FactType = {
  id: string;
  question: string;
  variants: FactVariantType[];
}

export const FACTS: FactType[] = [
  {
    id: "timeline-set-1",
    question: "World Football Moments",
    variants: [
      { index: 1, text: "First FIFA World Cup is held in Uruguay", description: "1930" },
      { index: 2, text: "Diego Maradona scores the “Hand of God” goal", description: "1986" },
      { index: 3, text: "UEFA Champions League era begins", description: "1992–1993 season" },
      { index: 4, text: "Spain wins its first FIFA World Cup", description: "2010" }
    ]
  },
  {
    id: "timeline-set-2",
    question: "Olympic History",
    variants: [
      { index: 1, text: "First modern Olympic Games are held in Athens", description: "1896" },
      { index: 2, text: "First Winter Olympic Games take place in Chamonix", description: "1924" },
      { index: 3, text: "Jesse Owens wins four gold medals at the Berlin Olympics", description: "1936" },
      { index: 4, text: "Usain Bolt runs 9.58 seconds in the 100m in Berlin", description: "2009" }
    ]
  },
  {
    id: "timeline-set-3",
    question: "Basketball Milestones",
    variants: [
      { index: 1, text: "James Naismith invents basketball", description: "1891" },
      { index: 2, text: "The first NBA season begins", description: "1946–1947" },
      { index: 3, text: "Michael Jordan wins his first NBA сhampionship with the Bulls", description: "1991" },
      { index: 4, text: "Golden State Warriors set a 73–9 regular season record", description: "2016" }
    ]
  },
  {
    id: "timeline-set-4",
    question: "Tennis Landmarks",
    variants: [
      { index: 1, text: "The First Wimbledon Championships are held", description: "1877" },
      { index: 2, text: "The Open Era in tennis officially begins", description: "1968" },
      { index: 3, text: "Björn Borg wins his first Wimbledon singles title", description: "1976" },
      { index: 4, text: "Serena Williams wins her first Wimbledon singles title", description: "2002" }
    ]
  },
  {
    id: "timeline-set-5",
    question: "Football Clubs & Stars",
    variants: [
      { index: 1, text: "Real Madrid football club is founded", description: "1902" },
      { index: 2, text: "The European Cup (later the Champions League) begins", description: "1955" },
      { index: 3, text: "The first Ballon d’Or is officially awarded", description: "1956" },
      { index: 4, text: "Cristiano Ronaldo signs for Real Madrid", description: "2009" }
    ]
  },
  {
    id: "timeline-set-6",
    question: "World Cup & Global Stage",
    variants: [
      { index: 1, text: "Brazil wins its first FIFA World Cup", description: "1958" },
      { index: 2, text: "Pelé scores his 1000th career goal", description: "1969" },
      { index: 3, text: "The first World Cup in Asia is held in Japan and South Korea", description: "2002" },
      { index: 4, text: "Germany wins the World Cup in Brazil", description: "2014" }
    ]
  },
  {
    id: "timeline-set-7",
    question: "Women in the Olympics",
    variants: [
      { index: 1, text: "Women first compete at the modern Olympic Games", description: "1900" },
      { index: 2, text: "Nadia Comăneci scores the first perfect 10 in Olympic gymnastics", description: "1976" },
      { index: 3, text: "The first Olympic women’s marathon is held in Los Angeles", description: "1984" },
      { index: 4, text: "Simone Biles wins four gold medals at the Rio Olympics", description: "2016" }
    ]
  },
  {
    id: "timeline-set-8",
    question: "European Football & Rules",
    variants: [
      { index: 1, text: "The first UEFA European Championship (Euro)takes place", description: "1960" },
      { index: 2, text: "England wins the FIFA World Cup at Wembley Stadium", description: "1966" },
      { index: 3, text: "The first official UEFA Women’s Championship is played", description: "1984" },
      { index: 4, text: "VAR is used for the first time at a men’s World Cup", description: "2018" }
    ]
  },
  {
    id: "timeline-set-9",
    question: "Legendary Runs",
    variants: [
      { index: 1, text: "The first Boston Marathon is held", description: "1897" },
      { index: 2, text: "Roger Bannister runs the first sub 4-minute mile", description: "1954" },
      { index: 3, text: "Abebe Bikila wins the Olympic marathon running barefoot", description: "1960" },
      { index: 4, text: "Eliud Kipchoge completes a sub 2-hour marathon in Vienna", description: "2019, unofficial record attempt" }
    ]
  },
  {
    id: "timeline-set-10",
    question: "Maradona & Messi",
    variants: [
      { index: 1, text: "Diego Maradona makes his professional debut in Argentina", description: "1976" },
      { index: 2, text: "Maradona transfers to FC Barcelona", description: "1982" },
      { index: 3, text: "Maradona helps Napoli win its first Serie A title", description: "1987" },
      { index: 4, text: "Lionel Messi makes his official debut for FC Barcelona", description: "2004" }
    ]
  },
  {
    id: "timeline-set-11",
    question: "Premier League Moments",
    variants: [
      { index: 1, text: "English First Division becomes the Premier League", description: "1992" },
      { index: 2, text: "Arsène Wenger becomes Arsenal manager", description: "1996" },
      { index: 3, text: "Leicester City wins the Premier League", description: "2016" },
      { index: 4, text: "Liverpool wins its first Premier League title", description: "2020" }
    ]
  },
  {
    id: "timeline-set-12",
    question: "Boxing Legends",
    variants: [
      { index: 1, text: "Muhammad Ali wins Olympic gold in Rome", description: "1960" },
      { index: 2, text: "Ali defeats George Foreman in the “Rumble in the Jungle”", description: "1974" },
      { index: 3, text: "Mike Tyson becomes the youngest heavyweight champion", description: "1986" },
      { index: 4, text: "Floyd Mayweather retires undefeated at 50–0", description: "2017" }
    ]
  },
  {
    id: "timeline-set-13",
    question: "Formula 1 History",
    variants: [
      { index: 1, text: "First Formula 1 World Championship season", description: "1950" },
      { index: 2, text: "Ayrton Senna wins his first F1 World Championship", description: "1988" },
      { index: 3, text: "Michael Schumacher wins his seventh title", description: "2004" },
      { index: 4, text: "Max Verstappen wins his first F1 title", description: "2021" }
    ]
  },
  {
    id: "timeline-set-14",
    question: "Baseball Milestones",
    variants: [
      { index: 1, text: "First World Series is played", description: "1903" },
      { index: 2, text: "Jackie Robinson breaks MLB`s color barrier", description: "1947" },
      { index: 3, text: "Hank Aaron breaks Babe Ruth’s home run record", description: "1974" },
      { index: 4, text: "Chicago Cubs end 108-year title drought", description: "2016" }
    ]
  },
  {
    id: "timeline-set-15",
    question: "Global Sporting Records",
    variants: [
      { index: 1, text: "First modern marathon distance standardized to 42.195 km", description: "1908" },
      { index: 2, text: "Bob Beamon sets a long jump record in Mexico City", description: "1968" },
      { index: 3, text: "Mark Spitz wins seven gold medals at one Olympics", description: "1972" },
      { index: 4, text: "Usain Bolt sets 200m world record at 19.19 seconds", description: "2009" }
    ]
  },
  {
    id: "timeline-set-16",
    question: "Women’s Football History",
    variants: [
      { index: 1, text: "First official women’s FA Cup Final in England", description: "1971" },
      { index: 2, text: "First FIFA Women’s World Cup held in China", description: "1991" },
      { index: 3, text: "USA wins Women’s World Cup with the famous Brandi Chastain celebration", description: "1999" },
      { index: 4, text: "First Women’s Ballon d'Or is awarded", description: "2018" }
    ]
  },
  {
    id: "timeline-set-17",
    question: "Gymnastics History",
    variants: [
      { index: 1, text: "Firts modern gymnastics events enter the Olympics", description: "1896" },
      { index: 2, text: "Olga Korbut’s groundbreaking performance in Munich", description: "1972" },
      { index: 3, text: "Nadia Comăneci scores first perfect 10", description: "1976" },
      { index: 4, text: "Simone Biles becomes the most decorated gymnast in history", description: "2019" }
    ]
  },
  {
    id: "timeline-set-18",
    question: "Cycling & Tour de France",
    variants: [
      { index: 1, text: "First Tour de France race", description: "1903" },
      { index: 2, text: "Eddy Merckx wins his first Tour de France", description: "1969" },
      { index: 3, text: "Lance Armstrong wins his first Tour de France", description: "1999" },
      { index: 4, text: "Chris Froome wins his fourth Tour de France", description: "2017" }
    ]
  },
  {
    id: "timeline-set-19",
    question: "Ice Hockey World Stage",
    variants: [
      { index: 1, text: "First Ice Hockey World Championship", description: "1920" },
      { index: 2, text: "The “Miracle on Ice” US vs Soviet Union", description: "1980" },
      { index: 3, text: "Wayne Gretzky becomes the NHL’s all-time top scorer", description: "1989" },
      { index: 4, text: "NHL players return to the Winter Olympics", description: "2022" }
    ]
  },
  {
    id: "timeline-set-20",
    question: "Football: Champions League",
    variants: [
      { index: 1, text: "Real Madrid wins the first European Cup", description: "1956" },
      { index: 2, text: "Manchester United wins the treble", description: "1999" },
      { index: 3, text: "Chelsea wins the Champions League for the first time", description: "2012" },
      { index: 4, text: "Real Madrid wins its 14th Champions League title", description: "2022" }
    ]
  }
];

