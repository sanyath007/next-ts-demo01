import Head from "next/head"

export default function Structure() {
    return (
        <>
            <Head>
                <title>โครงสร้างองค์กร - Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="pb-5 pt-[1rem]">
                <div className="container mx-auto border bg-white p-4 rounded-lg overflow-hidden">
                    <h1 className="title text-3xl">โครงสร้างองค์กร</h1>

                    <hr className="my-2" />

                    <div className="structure h-full my-10">
                        <div className="container">
                            <h1 className="level-1 rectangle">ผู้อำนวยการศูนย์สุขภาพจิตที่ 9</h1>
                            <ol className="level-2-wrapper">
                                <li>
                                    <h2 className="level-2 rectangle">หัวหน้ากลุ่มงานอำนวยการ</h2>
                                    {/* <ol className="level-3-wrapper border">
                                        <li> */}
                                            {/* <h3 className="level-3 rectangle">หัวหน้ากลุ่มงานอำนวยการ</h3> */}
                                            <ol className="level-4-wrapper">
                                                <li><h4 className="level-4 rectangle">Person A</h4></li>
                                                <li><h4 className="level-4 rectangle">Person B</h4></li>
                                                <li><h4 className="level-4 rectangle">Person C</h4></li>
                                                <li><h4 className="level-4 rectangle">Person D</h4></li>
                                            </ol>
                                        {/* </li>
                                        <li>
                                            <h3 className="level-3 rectangle">Manager B</h3>
                                            <ol className="level-4-wrapper">
                                                <li><h4 className="level-4 rectangle">Person A</h4></li>
                                                <li><h4 className="level-4 rectangle">Person B</h4></li>
                                                <li><h4 className="level-4 rectangle">Person C</h4></li>
                                                <li><h4 className="level-4 rectangle">Person D</h4></li>
                                            </ol>
                                        </li>
                                    </ol> */}
                                </li>
                                <li>
                                    <h2 className="level-2 rectangle">หัวหน้ากลุ่มงานวิชาการสุขภาพจิต</h2>
                                    <ol className="level-3-wrapper">
                                        <li>
                                            <h3 className="level-3 rectangle">Manager C</h3>
                                            {/* <ol className="level-4-wrapper">
                                                <li><h4 className="level-4 rectangle">Person A</h4></li>
                                                <li><h4 className="level-4 rectangle">Person B</h4></li>
                                                <li><h4 className="level-4 rectangle">Person C</h4></li>
                                                <li><h4 className="level-4 rectangle">Person D</h4></li>
                                            </ol> */}
                                        </li>
                                        <li>
                                            <h3 className="level-3 rectangle">Manager D</h3>
                                            {/* <ol className="level-4-wrapper">
                                                <li><h4 className="level-4 rectangle">Person A</h4></li>
                                                <li><h4 className="level-4 rectangle">Person B</h4></li>
                                                <li><h4 className="level-4 rectangle">Person C</h4></li>
                                                <li><h4 className="level-4 rectangle">Person D</h4></li>
                                            </ol> */}
                                        </li>
                                        <li>
                                            <h3 className="level-3 rectangle">Manager E</h3>
                                            {/* <ol className="level-4-wrapper">
                                                <li><h4 className="level-4 rectangle">Person A</h4></li>
                                                <li><h4 className="level-4 rectangle">Person B</h4></li>
                                                <li><h4 className="level-4 rectangle">Person C</h4></li>
                                                <li><h4 className="level-4 rectangle">Person D</h4></li>
                                            </ol> */}
                                        </li>
                                        <li>
                                            <h3 className="level-3 rectangle">Manager F</h3>
                                            {/* <ol className="level-4-wrapper">
                                                <li><h4 className="level-4 rectangle">Person A</h4></li>
                                                <li><h4 className="level-4 rectangle">Person B</h4></li>
                                                <li><h4 className="level-4 rectangle">Person C</h4></li>
                                                <li><h4 className="level-4 rectangle">Person D</h4></li>
                                            </ol> */}
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
