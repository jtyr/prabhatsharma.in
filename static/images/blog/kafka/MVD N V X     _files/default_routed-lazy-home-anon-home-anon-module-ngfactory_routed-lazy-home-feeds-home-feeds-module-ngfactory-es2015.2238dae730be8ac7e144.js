(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/arv":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t("9va6");let e=(()=>{class n{ngOnInit(){this.newsArticles=this.getNewsArticles(),this.featuredArticle=this.getFeaturedArticle()}getNewsArticles(){let n=[];return Object(u.forEach)(this.newsData.entities,l=>{let t=l.properties,u=t&&t.identifier,e=t&&t.url&&t.url.value;if(u&&e){let l=u.value,i=t.publisher,r=t.thumbnail_url;l&&i&&n.push({source:t.publisher,headline:l,link:e,imageUrl:r})}}),n}getFeaturedArticle(){let l=Object(u.findIndex)(this.newsArticles,l=>l.imageUrl&&l.source===n.FEATURED_SOURCE);return l>=0?this.newsArticles.splice(l,1)[0]:null}}return n.FEATURED_SOURCE="TechCrunch",n})()},"0Xzz":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t("9va6");class e{constructor(n,l){this.listService=n,this.metadataService=l,this.maxListsCount=5}ngOnInit(){this.featuredListItems=this.getFeaturedListItems(this.featuredListsData),this.totalListsCount=this.getTotalListsCount(this.featuredListsData)}getFeaturedListItems(n){let l=[];return Object(u.forEach)(n,n=>{let t=n.name,e=n.id,i=n.collections,r=Object(u.find)(i,n=>this.metadataService.isIdentifierEntity(n.collection_id)),o=r&&r.entities_count;if(e&&t&&o&&(l.push({id:e,urlTitle:this.getUrlTitle(t),name:t,entries:o}),l.length>=this.maxListsCount))return!1}),l}getUrlTitle(n){return this.listService.getUrlTitle(n)}getTotalListsCount(n){return n&&n.length}}},DglD:function(n,l,t){"use strict";var u=t("Mlb/"),e=t("ckX+"),i=t("+R5j"),r=t("k6lf"),o=t("vk2e"),a=t("BRL0"),c=t("ba/H");t("/arv"),t.d(l,"a",function(){return s}),t.d(l,"b",function(){return h});var s=u.sb({encapsulation:0,styles:[["ul[_ngcontent-%COMP%]{margin:0}li[_ngcontent-%COMP%]{padding:16px;border-bottom:1px solid rgba(0,0,0,.12)}li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:rgba(0,0,0,.54);white-space:nowrap}li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:normal}li.featured[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}a[_ngcontent-%COMP%]{font-weight:700}img[_ngcontent-%COMP%]{display:block;margin:4px auto 0;max-height:250px}"]],data:{}});function b(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,8,"li",[["class","featured"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,1,"a",[["class","cb-link"],["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u.Ob(2,null,[" "," "])),(n()(),u.ub(3,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),u.Ob(-1,null,[" \u2014 "])),(n()(),u.ub(5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Ob(6,null,["",""])),(n()(),u.ub(7,0,null,null,1,"a",[["class","cb-link"],["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u.ub(8,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,1,0,u.yb(1,"",t.featuredArticle.link,"")),n(l,2,0,t.featuredArticle.headline),n(l,6,0,t.featuredArticle.source),n(l,7,0,u.yb(1,"",t.featuredArticle.link,"")),n(l,8,0,u.yb(1,"",t.featuredArticle.imageUrl,""))})}function d(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,1,"a",[["class","cb-link"],["rel","noopener"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),u.Ob(2,null,[" "," "])),(n()(),u.ub(3,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),u.Ob(-1,null,[" \u2014 "])),(n()(),u.ub(5,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Ob(6,null,["",""]))],null,function(n,l){n(l,1,0,u.yb(1,"",l.context.$implicit.link,"")),n(l,2,0,l.context.$implicit.headline),n(l,6,0,l.context.$implicit.source)})}function g(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,9,"section-layout",[["themeId","partner"]],null,null,null,e.b,e.a)),u.tb(1,573440,null,0,i.a,[r.a],{themeId:[0,"themeId"],useColoredIcon:[1,"useColoredIcon"]},null),(n()(),u.ub(2,0,null,0,2,null,null,null,null,null,null,null)),(n()(),u.Ob(3,null,[" "," "])),u.Kb(4,1),(n()(),u.ub(5,0,null,2,4,"ul",[["section-layout-content",""]],null,null,null,null,null)),(n()(),u.kb(16777216,null,null,1,null,b)),u.tb(7,16384,null,0,o.p,[u.P,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.kb(16777216,null,null,1,null,d)),u.tb(9,278528,null,0,o.o,[u.P,u.L,u.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,1,0,"partner",!0),n(l,7,0,t.featuredArticle),n(l,9,0,t.newsArticles)},function(n,l){var t=u.Pb(l,3,0,n(l,4,0,u.Gb(l.parent,0),"CBL.HOMEPAGE.NEWS.HEADER"));n(l,3,0,t)})}function h(n){return u.Qb(2,[u.Ib(0,a.a,[c.a]),(n()(),u.kb(16777216,null,null,1,null,g)),u.tb(2,16384,null,0,o.p,[u.P,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,(null==t.newsArticles?null:t.newsArticles.length)>0)},null)}},Qu0u:function(n,l,t){"use strict";var u=t("Mlb/"),e=t("u2U7"),i=t("PfNg"),r=t("7KA2"),o=t("gHbE"),a=t("GKMj"),c=t("X1Od"),s=t("5EQ0"),b=t("Myyq"),d=t("0KxO"),g=t("ckX+"),h=t("+R5j"),f=t("k6lf"),m=t("vk2e"),O=t("BRL0"),p=t("ba/H");t("ZvOR"),t.d(l,"a",function(){return _}),t.d(l,"b",function(){return M});var _=u.sb({encapsulation:0,styles:[[".trendingItem[_ngcontent-%COMP%]{list-style-type:decimal-leading-zero}.number[_ngcontent-%COMP%]{width:20px;text-align:right}"]],data:{}});function C(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,8,"div",[["class","trendingItem"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,7,"div",[["class","layout-row layout-align-start-center"]],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,2,"div",[["class","number cb-margin-medium-horizontal"]],null,null,null,null,null)),(n()(),u.Ob(3,null,[" ",". "])),u.Kb(4,2),(n()(),u.ub(5,0,null,null,1,"identifier-image-link",[["class","flex"]],null,null,null,e.b,e.a)),u.tb(6,49152,null,0,i.a,[],{identifier:[0,"identifier"],showHoverPreview:[1,"showHoverPreview"]},null),(n()(),u.ub(7,0,null,null,1,"follow-button",[],[[1,"data-heap-entity_def_id",0]],null,null,r.b,r.a)),u.tb(8,770048,null,0,o.a,[a.a,c.a,s.a,b.a,d.a,u.h],{entityId:[0,"entityId"],entityDefId:[1,"entityDefId"]},null)],function(n,l){n(l,6,0,l.context.$implicit,!0),n(l,8,0,l.context.$implicit.uuid,l.context.$implicit.entity_def_id)},function(n,l){var t=u.Pb(l,3,0,n(l,4,0,u.Gb(l.parent.parent,1),l.context.index+1,"2.0-0"));n(l,3,0,t),n(l,7,0,u.Gb(l,8).entityDefId)})}function P(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,7,"section-layout",[["themeId","trending"]],null,null,null,g.b,g.a)),u.tb(1,573440,null,0,h.a,[f.a],{themeId:[0,"themeId"],useColoredIcon:[1,"useColoredIcon"]},null),(n()(),u.ub(2,0,null,0,2,null,null,null,null,null,null,null)),(n()(),u.Ob(3,null,[" "," "])),u.Kb(4,1),(n()(),u.ub(5,0,null,2,2,"div",[["class","cb-padding-small-vertical"],["section-layout-content",""]],null,null,null,null,null)),(n()(),u.kb(16777216,null,null,1,null,C)),u.tb(7,278528,null,0,m.o,[u.P,u.L,u.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,1,0,"trending",!0),n(l,7,0,t.trendingItems)},function(n,l){var t=u.Pb(l,3,0,n(l,4,0,u.Gb(l.parent,0),"CBL.HOMEPAGE.TRENDING.HEADER"));n(l,3,0,t)})}function M(n){return u.Qb(2,[u.Ib(0,O.a,[p.a]),u.Ib(0,m.g,[u.t]),(n()(),u.kb(16777216,null,null,1,null,P)),u.tb(3,16384,null,0,m.p,[u.P,u.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0,(null==t.trendingItems?null:t.trendingItems.length)>0)},null)}},ZvOR:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t("9va6");let e=(()=>{class n{ngOnInit(){this.trendingItems=this.getTrendingItems(this.trendingData)}getTrendingItems(l){let t=l.filter(n=>n.score&&n.entity&&n.entity.properties&&n.entity.properties.identifier).map(n=>({score:n.score,identifier:n.entity.properties.identifier}));return Object(u.slice)(Object(u.reverse)(Object(u.sortBy)(t,["score"])),0,n.LIMIT).map(n=>n.identifier)}}return n.LIMIT=10,n})()},kvsL:function(n,l,t){"use strict";var u=t("Mlb/"),e=t("Ufu9"),i=t("hmrU"),r=t("P6pJ"),o=t("qk26"),a=t("vk2e"),c=t("BRL0"),s=t("ba/H"),b=t("ckX+"),d=t("+R5j"),g=t("k6lf");t("wx54"),t("xvAS"),t.d(l,"a",function(){return h}),t.d(l,"b",function(){return m});var h=u.sb({encapsulation:0,styles:[["[_nghost-%COMP%]   .cardWrapper[_ngcontent-%COMP%]{padding:8px}[_nghost-%COMP%]   .cardWrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;padding:8px 0}[_nghost-%COMP%]   .cardWrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{border-radius:0}[_nghost-%COMP%]   .cardWrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4n), [_nghost-%COMP%]   .cardWrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4n+3){border-top:1px solid rgba(0,0,0,.05)}[_nghost-%COMP%]   .cardWrapper[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n+1)   mat-card[_ngcontent-%COMP%]{border-right:1px solid rgba(0,0,0,.05)}[_nghost-%COMP%]   .cardWrapper[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{padding:8px 16px;box-shadow:none}[_nghost-%COMP%]   .metric-number[_ngcontent-%COMP%]{color:#146aff;margin-bottom:4px}[_nghost-%COMP%]   .icon-attach-money[_ngcontent-%COMP%]{color:#4caf50;margin-right:-2px}[_nghost-%COMP%]   .icon-acquisition[_ngcontent-%COMP%]{color:#26a69a;margin-right:4px;width:18px}"]],data:{}});function f(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,12,"div",[["class","flex-50"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,11,"mat-card",[["class","layout-column cb-width-100 mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,e.b,e.a)),u.tb(2,49152,null,0,i.a,[[2,r.a]],null,null),(n()(),u.ub(3,0,null,0,1,"a",[["class","cb-absolute-to-cover"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Gb(n,4).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(4,671744,null,0,o.s,[o.p,o.a,a.l],{routerLink:[0,"routerLink"]},null),(n()(),u.ub(5,0,null,0,2,"div",[["class","metric-number cb-font-size-xlarge cb-font-weight-bold\n                      cb-text-align-center flex-noshrink"]],null,null,null,null,null)),(n()(),u.ub(6,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),u.Ob(7,null,["",""])),(n()(),u.ub(8,0,null,0,4,"div",[["class","flex-noshrink cb-font-size-small layout-row cb-font-weight-bold\n                      layout-align-center-center cb-text-align-center cb-text-color-medium"]],null,null,null,null,null)),(n()(),u.ub(9,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),u.Ob(10,null,["",""])),u.Kb(11,1),u.Kb(12,1)],function(n,l){n(l,4,0,l.context.$implicit.route.path)},function(n,l){n(l,1,0,"NoopAnimations"===u.Gb(l,2)._animationMode),n(l,3,0,u.Gb(l,4).target,u.Gb(l,4).href),n(l,7,0,l.context.$implicit.metricNumber);var t=u.Pb(l,10,0,n(l,12,0,u.Gb(l.parent,1),u.Pb(l,10,0,n(l,11,0,u.Gb(l.parent,0),l.context.$implicit.label))));n(l,10,0,t)})}function m(n){return u.Qb(0,[u.Ib(0,c.a,[s.a]),u.Ib(0,a.B,[]),(n()(),u.ub(2,0,null,null,8,"section-layout",[["themeId","crunchbase"]],null,null,null,b.b,b.a)),u.tb(3,573440,null,0,d.a,[g.a],{themeId:[0,"themeId"],useColoredIcon:[1,"useColoredIcon"]},null),(n()(),u.ub(4,0,null,0,2,null,null,null,null,null,null,null)),(n()(),u.Ob(5,null,[" "," "])),u.Kb(6,1),(n()(),u.ub(7,0,null,2,3,"div",[["section-layout-content",""]],null,null,null,null,null)),(n()(),u.ub(8,0,null,null,2,"div",[["class","cardWrapper layout-row layout-wrap"]],null,null,null,null,null)),(n()(),u.kb(16777216,null,null,1,null,f)),u.tb(10,278528,null,0,a.o,[u.P,u.L,u.r],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,3,0,"crunchbase",!0),n(l,10,0,t.cards)},function(n,l){var t=u.Pb(l,5,0,n(l,6,0,u.Gb(l,0),"CBL.HOMEPAGE.THIS_WEEK.HEADER"));n(l,5,0,t)})}},niyq:function(n,l,t){"use strict";var u=t("Mlb/"),e=t("qk26"),i=t("vk2e"),r=t("BRL0"),o=t("ba/H"),a=t("ckX+"),c=t("+R5j"),s=t("k6lf"),b=t("Wrdk"),d=t("qpUv"),g=t("Htug"),h=t("nJV+");t("0Xzz"),t("aWYc"),t("nkAL"),t.d(l,"a",function(){return f}),t.d(l,"b",function(){return O});var f=u.sb({encapsulation:0,styles:[["div.layout-row[_ngcontent-%COMP%]{padding:16px}home-feeds[_nghost-%COMP%]   table[_ngcontent-%COMP%], home-feeds   [_nghost-%COMP%]   table[_ngcontent-%COMP%]{table-layout:fixed}home-feeds[_nghost-%COMP%]   .grid-column-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], home-feeds   [_nghost-%COMP%]   .grid-column-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{justify-content:flex-start}home-feeds[_nghost-%COMP%]   .grid-column-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], home-feeds   [_nghost-%COMP%]   .grid-column-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{text-transform:capitalize}home-feeds[_nghost-%COMP%]   th[_ngcontent-%COMP%], home-feeds   [_nghost-%COMP%]   th[_ngcontent-%COMP%]{background-color:#fff;border-right:none}home-feeds[_nghost-%COMP%]   th[_ngcontent-%COMP%]:last-child, home-feeds   [_nghost-%COMP%]   th[_ngcontent-%COMP%]:last-child{width:4rem}home-feeds[_nghost-%COMP%]   td[_ngcontent-%COMP%], home-feeds   [_nghost-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle;padding:8px}home-feeds[_nghost-%COMP%]   td[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], home-feeds   [_nghost-%COMP%]   td[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{line-height:1.4em;max-height:2.8em;display:inline-block;vertical-align:middle;white-space:normal}home-feeds[_nghost-%COMP%]   div.layout-row[_ngcontent-%COMP%], home-feeds   [_nghost-%COMP%]   div.layout-row[_ngcontent-%COMP%]{padding:8px}home-feeds[_nghost-%COMP%]   div.layout-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], home-feeds   [_nghost-%COMP%]   div.layout-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:800}"]],data:{}});function m(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,7,"tr",[],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,4,"td",[],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,3,"a",[["class","cb-link cb-overflow-ellipsis"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Gb(n,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(3,671744,null,0,e.s,[e.p,e.a,i.l],{routerLink:[0,"routerLink"]},null),u.Hb(4,3),(n()(),u.Ob(5,null,[" "," "])),(n()(),u.ub(6,0,null,null,1,"td",[["class","cb-text-align-right"]],null,null,null,null,null)),(n()(),u.Ob(7,null,[" "," "]))],function(n,l){var t=n(l,4,0,"/lists",l.context.$implicit.urlTitle,l.context.$implicit.id);n(l,3,0,t)},function(n,l){n(l,2,0,u.Gb(l,3).target,u.Gb(l,3).href),n(l,5,0,l.context.$implicit.name),n(l,7,0,l.context.$implicit.entries)})}function O(n){return u.Qb(0,[u.Ib(0,r.a,[o.a]),(n()(),u.ub(1,0,null,null,30,"section-layout",[["themeId","featured"]],null,null,null,a.b,a.a)),u.tb(2,573440,null,0,c.a,[s.a],{themeId:[0,"themeId"],useColoredIcon:[1,"useColoredIcon"]},null),(n()(),u.ub(3,0,null,0,2,null,null,null,null,null,null,null)),(n()(),u.Ob(4,null,[" "," "])),u.Kb(5,1),(n()(),u.ub(6,0,null,2,25,"div",[["section-layout-content",""]],null,null,null,null,null)),(n()(),u.ub(7,0,null,null,16,"div",[["class","cb-overflow-x-only"]],null,null,null,null,null)),(n()(),u.ub(8,0,null,null,15,"table",[["class","card-grid no-top-border"]],null,null,null,null,null)),(n()(),u.ub(9,0,null,null,11,"thead",[],null,null,null,null,null)),(n()(),u.ub(10,0,null,null,10,"tr",[],null,null,null,null,null)),(n()(),u.ub(11,0,null,null,4,"th",[],null,null,null,null,null)),(n()(),u.ub(12,0,null,null,3,"grid-column-header",[],null,null,null,b.b,b.a)),u.tb(13,4308992,null,0,d.a,[u.k,u.D,o.a,s.a],null,null),(n()(),u.Ob(14,0,[" "," "])),u.Kb(15,1),(n()(),u.ub(16,0,null,null,4,"th",[],null,null,null,null,null)),(n()(),u.ub(17,0,null,null,3,"grid-column-header",[],null,null,null,b.b,b.a)),u.tb(18,4308992,null,0,d.a,[u.k,u.D,o.a,s.a],null,null),(n()(),u.Ob(19,0,[" "," "])),u.Kb(20,1),(n()(),u.ub(21,0,null,null,2,"tbody",[],null,null,null,null,null)),(n()(),u.kb(16777216,null,null,1,null,m)),u.tb(23,278528,null,0,i.o,[u.P,u.L,u.r],{ngForOf:[0,"ngForOf"]},null),(n()(),u.ub(24,0,null,null,7,"div",[["class","layout-row layout-align-center-center"]],null,null,null,null,null)),(n()(),u.ub(25,0,null,null,6,"a",[["class","cb-link cb-text-transform-upper layout-row layout-align-center-center"],["routerLink","/featured"]],[[1,"aria-label",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Gb(n,26).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(26,671744,null,0,e.s,[e.p,e.a,i.l],{routerLink:[0,"routerLink"]},null),u.Kb(27,1),(n()(),u.Ob(28,null,[" "," "])),u.Kb(29,1),(n()(),u.ub(30,0,null,null,1,"icon",[["color","inherit"],["key","chevron-right"]],[[8,"className",0]],null,null,g.b,g.a)),u.tb(31,573440,null,0,h.a,[i.e,u.k],{key:[0,"key"],color:[1,"color"]},null)],function(n,l){var t=l.component;n(l,2,0,"featured",!0),n(l,13,0),n(l,18,0),n(l,23,0,t.featuredListItems),n(l,26,0,"/featured"),n(l,31,0,"chevron-right","inherit")},function(n,l){var t=u.Pb(l,4,0,n(l,5,0,u.Gb(l,0),"CBL.HOMEPAGE.FEATURED_LISTS.HEADER"));n(l,4,0,t);var e=u.Pb(l,14,0,n(l,15,0,u.Gb(l,0),"CBL.LISTS.LIST_NAME"));n(l,14,0,e);var i=u.Pb(l,19,0,n(l,20,0,u.Gb(l,0),"CBL.LISTS.ENTRIES"));n(l,19,0,i);var r=u.Pb(l,25,0,n(l,27,0,u.Gb(l,0),"CBL.LISTS.FEATURED"));n(l,25,0,r,u.Gb(l,26).target,u.Gb(l,26).href);var o=u.Pb(l,28,0,n(l,29,0,u.Gb(l,0),"CBL.HOMEPAGE.FEATURED_LISTS.SHOW_ALL"));n(l,28,0,o),n(l,30,0,u.Gb(l,31).classes)})}},uEqC:function(n,l,t){"use strict";t.d(l,"a",function(){return u});class u{}},wx54:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t("9va6");let e=(()=>{class n{constructor(n){this.formatterUtil=n}ngOnInit(){this.cards=[{metricNumber:Object(u.has)(this.metrics,"funding_rounds.count")?this.formatNumber(this.metrics.funding_rounds.count):"-",themeId:"funding",label:"CBL.HOMEPAGE.THIS_WEEK.FUNDING_ROUNDS",route:n.FUNDING_ROUNDS_ROUTE},{metricNumber:Object(u.has)(this.metrics,"funding_rounds.total_amount_raised")?this.formatNumber(this.metrics.funding_rounds.total_amount_raised):"-",themeId:"funding",label:"CBL.HOMEPAGE.THIS_WEEK.FUNDING_AMOUNT",route:n.FUNDING_ROUNDS_ROUTE},{metricNumber:Object(u.has)(this.metrics,"acquisitions.count")?this.formatNumber(this.metrics.acquisitions.count):"-",themeId:"acquisition",label:"CBL.HOMEPAGE.THIS_WEEK.ACQUISITIONS",route:n.ACQUISITIONS_ROUTE},{metricNumber:Object(u.has)(this.metrics,"acquisitions.total_amount")?this.formatNumber(this.metrics.acquisitions.total_amount):"-",themeId:"acquisition",label:"CBL.HOMEPAGE.THIS_WEEK.ACQUISITIONS_AMOUNT",route:n.ACQUISITIONS_ROUTE}]}formatNumber(n){return"number"==typeof n?this.formatterUtil.scaleNumber(n):Object(u.has)(n,"currency")&&Object(u.has)(n,"value_usd")&&"USD"===n.currency?this.formatterUtil.scaleMoney(n.value_usd):"-"}}return n.FUNDING_ROUNDS_ROUTE={path:["/lists","funding-rounds-this-week","597d61b8-3ffe-426c-903e-6e33bcb29f9d","funding_rounds"]},n.ACQUISITIONS_ROUTE={path:["/lists","acquisitions-this-week","f73873b1-093e-40a7-a329-ec4635731873","acquisitions"]},n})()}}]);