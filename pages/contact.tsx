import Head from "next/head"

export default function Contact() {
    return (
        <>
            <Head>
                <title>ติดต่อเรา - Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="p-2">
                <div className="container mx-auto border bg-white p-4 rounded-lg overflow-hidden">
                    <h1 className="title text-3xl">ติดต่อเรา</h1>

                    <hr className="my-2" />

                    <div className="contact h-full my-10">
                        <div className="container">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.77113921239504!2d102.10472111115492!3d14.98331467849054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31194c9cbc345f15%3A0x9bb83d25272fc25f!2z4Lio4Li54LiZ4Lii4LmM4Liq4Li44LiC4Lig4Liy4Lie4LiI4Li04LiV4LiX4Li14LmIIDk!5e0!3m2!1sth!2sth!4v1677488232052!5m2!1sth!2sth" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
