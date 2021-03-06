import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Blog from '../components/blog';
import Meta from '../components/meta';
import { StaticImage } from "gatsby-plugin-image";
import { sumarrize } from '../func';
const style = require("../styles/about-tmp.module.scss")

const AboutTmp = () => {

    const defaultDesc = `TypeScriptが好きな新卒のソフトウェアディベロッパーです。仕事ではReactやAngular、Ruby on Rails周りをぽちぽち書いてます。大学の卒論ではPythonを使って機械学習したりしてました。`

    return(
        <Blog>
            <Meta 
                title="ぽてログ ABOUT"
                description={sumarrize(defaultDesc)}
            />
            <div className={style.table}>
                <section className={style.content}>
                    <div className={style.youngMe}>
                        <StaticImage
                            src="../assets/images/youngerme.jpg"
                            alt="young keita furuse aka poteboy"
                            imgClassName="img-me"
                        />
                    </div>
                    <div style={style.profile}>
                    <h3>Profile</h3>
                        <p>
                            MedTech系スタートアップでソフトウェア開発者をやっています。
                            <br/>
                            2021年新卒入社で、業務では<code className={'language-text'}>Angular</code>、<code className={'language-text'}>Ruby on Rails</code>などを用いたアプリケーションの開発を担当しています。
                            <br/>
                            大学時代からインターンとして実務開発業務に携わり、Webフロントエンド開発とREST APIサーバー開発の経験を積みました。
                            <br/>
                            また、大学の卒業論文では<code className={'language-text'}>Python</code>を使って機械学習したりしました。
                            <br/>
                            フロントエンド開発と<code className={'language-text'}>TypeScript</code>が好物です。技術とサービス、両方に対して真摯な開発者になりたいと思って日々勉強しています。
                        </p>
                    </div>

                    <div style={style.profile}>
                    <h3>SKILLS</h3>
                        <p>
                            言語は<code className={'language-text'}>Python</code>, <code className={'language-text'}>TypeScript</code>, <code className={'language-text'}>JavaScript</code>, <code className={'language-text'}>Ruby</code>, <code className={'language-text'}>Go</code>辺りが書けます。
                            <br/>
                            フレームワークは<code className={'language-text'}>Angular</code>, <code className={'language-text'}>Gatsbyjs</code>, <code className={'language-text'}>Nextjs</code>, <code className={'language-text'}>Ruby on Rails</code>周りを触っています。
                            <br/>
                            他には、大学1年生の頃にTOEICで920点、2年生の頃にTOEFL iBTで96点、3年生の頃にベンチプレスで150kg(非公式ルール)を持ち上げたので、英語と筋トレもﾁｮｯﾄだけできます。
                            <br/>
                            最近お絵かきも始めたので、もっとうまく描けるようになりたいです。
                        </p>
                    </div>
                    
                    <div style={style.profile}>
                    <h3>About</h3>
                        <p>
                            このサイトでは自分の勉強も兼ねてプログラミングやIT技術に関して情報発信をしています。
                            <br/>
                            基本的にはWeb開発の話題が多めですが、アルゴリズムからWebデザインまで幅広くカバーしていきたいです。
                            <br/>
                            アイコンは会社のデザイナーさんに作って頂いたもので、とても気に入っているので社内外問わず愛用しています。金髪でクロムハーツを好んでつけていることからこのデザインになりました。
                            <br/>
                            このサイトは私個人が完全に趣味で運営しており、ここでの発言は所属組織の見解を代表するものではありません。
                            <br/>
                            なお、このサイトのソースコードは<a href='https://github.com/poteboy/poteboy' target="_blank" rel="noopener">GitHub上のリンク</a>からご覧になる事ができます。
                        </p>
                    </div>
                    
                    <div style={style.contact}>
                        <h3>Contact</h3>
                        <p>
                            ・<a href="mailto:keitatkins4@gmail.com">Email</a>
                        </p>
                    </div>
                    <br/>
                </section>
            </div>
        </Blog>
    )
}

export default AboutTmp