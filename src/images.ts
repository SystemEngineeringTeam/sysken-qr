import logo from "./assets/logo.png";
import logoSimple from "./assets/logo-simpole.png";
import oldLogo from "./assets/old-logo.jpg";
import syscatDoya from "./assets/syscat-doya.png";
import syscatGood from "./assets/syscat-good.png";
import syscatLove from "./assets/syscat-love.png";
import syscatOk from "./assets/syscat-ok.png";
import syscatSleep from "./assets/syscat-sleep.png";
import syscat from "./assets/syscat.png";
import syscatCry from "./assets/syscat-cry.png";
import syscatDoya2 from "./assets/syscat-doya2.png";
import syscatKira from "./assets/syscat-kira.png";
import syscatMite from "./assets/syscat-mite.png";
import syscatSintyoku from "./assets/syscat-sintyoku.png";
import syscatTyping from "./assets/syscat-typing.png";
import syscatTira from "./assets/syscat-tira.png";
import syscatRemote from "./assets/syscat-remote.png";
import syscatRemoteSansen from "./assets/syscat-remote_sansen.png";
import syscatMoyamoya from "./assets/syscat-moyamoya.png";
import syscatHarapeko from "./assets/syscat-harapeko.png";
import syscatHuman from "./assets/syscat_human.png";

export interface Image {
  id: number;
  src: string;
  title: string;
}

const images: Image[] = [
  { id: 1, src: logo, title: "ロゴ" },
  { id: 2, src: logoSimple, title: "ロゴ(シンプル)" },
  { id: 3, src: oldLogo, title: "旧ロゴ" },
  { id: 4, src: syscat, title: "シスにゃん" },
  { id: 5, src: syscatDoya, title: "シスにゃん(どや)" },
  { id: 6, src: syscatGood, title: "シスにゃん(グッド)" },
  { id: 7, src: syscatLove, title: "シスにゃん(ラブ)" },
  { id: 8, src: syscatOk, title: "シスにゃん(OK)" },
  { id: 9, src: syscatSleep, title: "シスにゃん(睡眠中)" },
  { id: 10, src: syscatCry, title: "シスにゃん(泣)" },
  { id: 12, src: syscatDoya2, title: "シスにゃん(どや) 2" },
  { id: 13, src: syscatKira, title: "シスにゃん(キラキラ)" },
  { id: 14, src: syscatMite, title: "シスにゃん(みてみて)" },
  { id: 15, src: syscatSintyoku, title: "シスにゃん(進捗どうですか)" },
  { id: 16, src: syscatTyping, title: "シスにゃん(タイピング)" },
  { id: 17, src: syscatTira, title: "シスにゃん(チラッ)" },
  { id: 18, src: syscatRemote, title: "シスにゃん(リモート)" },
  { id: 19, src: syscatRemoteSansen, title: "シスにゃん(リモート参戦)" },
  { id: 20, src: syscatMoyamoya, title: "シスにゃん(もやもや)" },
  { id: 21, src: syscatHarapeko, title: "シスにゃん(腹ペコ)" },
  { id: 22, src: syscatHuman, title: "シスにゃん(人間)" },
];

export const getImageByIdStr = (id_: string | undefined) => {
  if (id_ === undefined) return undefined;
  const id = Number(id_);
  return images.find((image) => image.id === id);
};

export default images;
