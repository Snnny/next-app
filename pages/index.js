import Layout from '../components/layout.js'
import Link from 'next/link'
import React, { Component } from 'react'
require('../assets/style/global.scss')
import style from '../assets/style/app.scss'

console.log(style)

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

class Index extends Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if(window) {
      let head = document.getElementsByTagName('head')[0]
      let documentFragment = document.createDocumentFragment()
      let s = document.createElement('script')
      s.src = "http://g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"
      let s2 = document.createElement('script')
      s2.src = "https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"
      let s3 = document.createElement('script')
      let s4 = document.createElement('script')
      s3.innerHTML = ` window.onload = function () {
      window.viewportUnitsBuggyfill.init({ hacks: window.viewportUnitsBuggyfillHacks });
     
    }`
      s4.innerHTML = ` if ('addEventListener' in document) {
       window.onload = function() {
          document.addEventListener('DOMContentLoaded', function() {
          FastClick.attach(document.body);
        }, false);
       }
    }
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }`
      documentFragment.appendChild(s)
      documentFragment.appendChild(s2)
      documentFragment.appendChild(s3)
      head.appendChild(documentFragment)
      head.appendChild(s4)
      document.title = '小小包麻麻'
    }
  }

  render() {
    return(
      <Layout>
        <h1 className={style.app}>My Blog11</h1>
        <ul>
          {getPosts().map((post) => (
            <li key={post.id}>
              <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default Index

