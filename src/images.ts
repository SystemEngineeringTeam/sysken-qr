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

const images: Omit<Image, "id">[] = [
  { src: logo, title: "ロゴ" },
  { src: logoSimple, title: "ロゴ(シンプル)" },
  { src: oldLogo, title: "旧ロゴ" },
  { src: syscat, title: "シスにゃん" },
  { src: syscatDoya, title: "シスにゃん(どや)" },
  { src: syscatGood, title: "シスにゃん(グッド)" },
  { src: syscatLove, title: "シスにゃん(ラブ)" },
  { src: syscatOk, title: "シスにゃん(OK)" },
  { src: syscatSleep, title: "シスにゃん(睡眠中)" },
  { src: syscatCry, title: "シスにゃん(泣)" },
  { src: syscatDoya2, title: "シスにゃん(どや) 2" },
  { src: syscatKira, title: "シスにゃん(キラキラ)" },
  { src: syscatMite, title: "シスにゃん(みてみて)" },
  { src: syscatSintyoku, title: "シスにゃん(進捗どうですか)" },
  { src: syscatTyping, title: "シスにゃん(タイピング)" },
  { src: syscatTira, title: "シスにゃん(チラッ)" },
  { src: syscatRemote, title: "シスにゃん(リモート)" },
  { src: syscatRemoteSansen, title: "シスにゃん(リモート参戦)" },
  { src: syscatMoyamoya, title: "シスにゃん(もやもや)" },
  { src: syscatHarapeko, title: "シスにゃん(腹ペコ)" },
  { src: syscatHuman, title: "シスにゃん(人間)" },
];

export default images.map((image, i) => ({ ...image, id: i }));
