var posts=["ASUS-Router-Light-NAS/","Anzhiyu-games-page/","Automatically-generate-video/","Chainedbox-OMV/","Chainedbox-OpenWrt/","DIY-x86-NAS/","Dell-XPS9360-Hackintosh/","External-Hard-Drive-Case/","GitHub-Pages-Blog/","Free-CDN-for-Blog/","Markdown-Advance-Format/","Hexo-Blog/","NAS-Aria2-Downloader/","Pocket-WiFi-with-Snapdragon-410/","Solid-state-Drive(SSD)/","iperf3-Speed-Test/","iOS-Sideloading-AltStore/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };