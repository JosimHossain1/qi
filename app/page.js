// Class 1
import class1Bangla from "@/im/book_cover/class 1/class_1_bangla.png";
import class1English from "@/im/book_cover/class 1/class_1_english.png";
import class1Math from "@/im/book_cover/class 1/class_1_math.png";
// Class 2
import class2Bangla from "@/im/book_cover/class 2/class_2_bangla.png";
import class2English from "@/im/book_cover/class 2/class_2_english.png";
import class2Math from "@/im/book_cover/class 2/class_2_math.png";

// Class 3
import class3Bangla from "@/im/book_cover/class 3/class_3_bangla.png";
import class3English from "@/im/book_cover/class 3/class_3_english.png";
import class3Math from "@/im/book_cover/class 3/class_3_math.png";
import class3science from "@/im/book_cover/class 3/class_3_science.png";
import class3gbs from "@/im/book_cover/class 3/class_3_gbs.png";
import class3islam from "@/im/book_cover/class 3/class_3_islam.png";
import class3hindu from "@/im/book_cover/class 3/class_3_hindu.png";
import class3buddha from "@/im/book_cover/class 3/class_3_buddha.png";
import class3cristian from "@/im/book_cover/class 3/class_3_cristian.png";

// Class 4
import class4Bangla from "@/im/book_cover/class 4/class_4_bangla.png";
import class4English from "@/im/book_cover/class 4/class_4_english.png";
import class4Math from "@/im/book_cover/class 4/class_4_math.png";
import class4science from "@/im/book_cover/class 4/class_4_science.png";
import class4gbs from "@/im/book_cover/class 4/class_4_bgs.png";
import class4islam from "@/im/book_cover/class 4/class_4_islam.png";
import class4hindu from "@/im/book_cover/class 4/class_4_hindu.png";
import class4buddha from "@/im/book_cover/class 4/class_4_buddha.png";
import class4cristian from "@/im/book_cover/class 4/class_4_cristian.png";

// Class 5

import class5Bangla from "@/im/book_cover/class 5/class_5_bangla.png";
import class5English from "@/im/book_cover/class 5/class_5_english.png";
import class5Math from "@/im/book_cover/class 5/class_5_math.png";
import class5science from "@/im/book_cover/class 5/class_5_science.png";
import class5gbs from "@/im/book_cover/class 5/class_5_bgs.png";
import class5islam from "@/im/book_cover/class 5/class_5_islam.png";
import class5hindu from "@/im/book_cover/class 5/class_5_hindu.png";
import class5buddha from "@/im/book_cover/class 5/class_5_buddha.png";
import class5cristian from "@/im/book_cover/class 5/class_5_cristian.png";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" space-y-3">
      {/* Class 1 */}
      <h1>Class 1</h1>
      <div className="grid grid-cols-9">
        <Image src={class1Bangla} alt="" />
        <Image src={class1English} alt="" />
        <Image src={class1Math} alt="" />
      </div>

      {/* Class 2 */}
      <h1>Class 2</h1>
      <div className="grid grid-cols-9">
        <Image src={class2Bangla} alt="" />
        <Image src={class2English} alt="" />
        <Image src={class2Math} alt="" />
      </div>

      {/* Class 3 */}
      <h1>Class 3</h1>
      <div className="grid grid-cols-9">
        <Image src={class3Bangla} alt="" />
        <Image src={class3English} alt="" />
        <Image src={class3Math} alt="" />
        <Image src={class3science} alt="" />
        <Image src={class3gbs} alt="" />
        <Image src={class3islam} alt="" />
        <Image src={class3hindu} alt="" />
        <Image src={class3buddha} alt="" />
        <Image src={class3cristian} alt="" />
      </div>
      {/* Class 4 */}
      <h1>Class 4</h1>
      <div className="grid grid-cols-9">
        <Image src={class4Bangla} alt="" />
        <Image src={class4English} alt="" />
        <Image src={class4Math} alt="" />
        <Image src={class4science} alt="" />
        <Image src={class4gbs} alt="" />
        <Image src={class4islam} alt="" />
        <Image src={class4hindu} alt="" />
        <Image src={class4buddha} alt="" />
        <Image src={class4cristian} alt="" />
      </div>
      {/* Class 5 */}
      <h1>Class 5</h1>
      <div className="grid grid-cols-9">
        <Image src={class5Bangla} alt="" />
        <Image src={class5English} alt="" />
        <Image src={class5Math} alt="" />
        <Image src={class5science} alt="" />
        <Image src={class5gbs} alt="" />
        <Image src={class5islam} alt="" />
        <Image src={class5hindu} alt="" />
        <Image src={class5buddha} alt="" />
        <Image src={class5cristian} alt="" />
      </div>
    </main>
  );
}
