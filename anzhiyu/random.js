var posts=["ASUS-Router-Light-NAS/","Chainedbox-OMV/","Chainedbox-OpenWrt/","DIY-x86-NAS/","Dell-XPS9360-Hackintosh/","External-Hard-Drive-Case/","Free-Domain-&-CDN-for-Blog/","Hexo-Blog/","Markdown-Advance-Format/","NAS-Aria2-Downloader/","Pocket-WiFi-with-Snapdragon-410/","Solid-state-Drive(SSD)/","iOS-Sideloading-AltStore/","iperf3-Speed-Test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };