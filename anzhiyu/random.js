var posts=["ASUS-Router-Light-NAS/","Chainedbox-OMV/","Chainedbox-OpenWrt/","Anzhiyu-games-page/","DIY-x86-NAS/","Dell-XPS9360-Hackintosh/","External-Hard-Drive-Case/","Hexo-Blog/","Free-Domain-&-CDN-for-Blog/","NAS-Aria2-Downloader/","Markdown-Advance-Format/","Solid-state-Drive(SSD)/","Pocket-WiFi-with-Snapdragon-410/","iperf3-Speed-Test/","iOS-Sideloading-AltStore/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };