(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"SoZ/":function(e,t,a){},ZknL:function(e,t,a){"use strict";t.__esModule=!0,t.MediaOverlay=t.Media=void 0;var n=i(a("Kid0")),r=i(a("/rBD"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=n.default,t.Media=n.default,t.MediaOverlay=r.default},amwm:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var n=a("q1tI"),r=a.n(n),i=a("TJpk"),o=a.n(i),c=a("hpys"),l=a("zOpi"),s=a("IpnI"),d=a.n(s);t.default=function(e){var t=e.data,a=e.pageContext,n=e.location;return r.a.createElement(c.a,{location:n,title:a.category.charAt(0).toUpperCase()+a.category.slice(1)},r.a.createElement("div",{className:"category-container"},r.a.createElement(o.a,null,r.a.createElement("title",null,'Posts in category "'+a.category+'" | '+d.a.siteTitle),r.a.createElement("link",{rel:"canonical",href:d.a.siteUrl+"/categories/"+a.category})),r.a.createElement(l.a,{postEdges:t.allMarkdownRemark.edges})))};var m="3260777433"},nQfI:function(e,t,a){},zOpi:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("JX7q"),o=a("dI71"),c=a("CFXp"),l=a.n(c),s=a("JE5U"),d=a.n(s),m=a("Mrpz"),u=a.n(m),p=a("yHE8"),f=a.n(p),g=a("DqwC"),h=a.n(g),E=a("Yumy"),v=a.n(E),y=a("Wbzz"),w=a("wd/R"),b=a.n(w),k=a("ZknL"),z=a.n(k),N=a("8+RX"),R=a("N1om"),I=a.n(R),x=a("Y0Jh"),M=a.n(x),C=(a("SoZ/"),function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.categories;return r.a.createElement("div",{className:"post-category-container"},e&&e.map((function(e){return r.a.createElement(y.Link,{key:e,style:{textDecoration:"none"},to:"/categories/"+I()(e)},r.a.createElement(M.a,{label:e,className:"post-preview-categories"}))})))},t}(n.Component)),O=a("XrVz"),J=a("IpnI"),L=a.n(J),D=(a("nQfI"),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={mobile:!0},a.handleResize=a.handleResize.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},a.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},a.render=function(){var e=this.props.postInfo,t=this.state.mobile,a=t,n=t?162:225;return r.a.createElement(l.a,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},r.a.createElement(y.Link,{style:{textDecoration:"none"},to:e.path},r.a.createElement(z.a,{style:{height:n,paddingBottom:"0px"}},r.a.createElement(O.a,{postNode:e,coverHeight:n,coverClassName:"post-cover"}),r.a.createElement(k.MediaOverlay,null,r.a.createElement(d.a,{title:e.title,className:"post-preview-title"},r.a.createElement(u.a,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),r.a.createElement(d.a,{expander:a,avatar:r.a.createElement(f.a,{icon:r.a.createElement(v.a,{iconClassName:"fa fa-calendar"})}),title:"Julkaistu "+b()(e.date).format(L.a.dateFormat),subtitle:e.timeToRead+" min lukemista"}),r.a.createElement(h.a,{expandable:a},e.excerpt,r.a.createElement("div",{className:"post-binning-container"},r.a.createElement(C,{categories:e.categories}),r.a.createElement(N.a,{tags:e.tags}))))},t}(n.Component));t.a=function(e){var t=e.postEdges,a=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,categories:t.node.frontmatter.categories,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})),e}();return r.a.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},r.a.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},a.map((function(e){return r.a.createElement(D,{key:e.title,postInfo:e})}))))}}}]);
//# sourceMappingURL=component---src-templates-category-jsx-1ecec6795688fa673e8f.js.map