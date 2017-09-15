---
class: post-blog post-detail
type: Blog
$title: "Even Faster Loading Ads in AMP"
id: ads-even-faster-loading-ads-in-amp
author: Vamsee Jasti
role:  Product Manager, AMP Project
origin: "https://amphtml.wordpress.com/2017/08/21/even-faster-loading-ads-in-amp/amp/"
excerpt: "As we’ve talked about before, we can’t improve the web for all if we don’t address how ads behave on web pages. At Google I/O earlier this year, we hosted a session on ads in AMP where we talked about the journey needed to get from supporting basic functionality of ads on AMP pages to [&#8230;]"
avatar: http://1.gravatar.com/avatar/42ecb1ea497ca9d0ffe1e406cae70e27?s=96&d=identicon&r=G
date_data: 2017-08-22T04:49:21+05:30
$date: August 22, 2017
$parent: /content/latest/list-blog.html
$path: /latest/blog/{base}/
$localization:
  path: /{locale}/latest/blog/{base}/
components:
  - social-share
---

<div class="amp-wp-article-content">
<p><strong>As we’ve talked about before, we can’t improve the web for all if we don’t address how ads behave on web pages. At Google I/O earlier this year, </strong><a href="https://www.youtube.com/watch?v=K6zKOtS_2FU"><strong>we hosted a session</strong></a><strong> on ads in AMP where we talked about the journey needed to get from supporting basic functionality of ads on AMP pages to enabling a truly excellent advertising experience on AMP pages for users, publishers and advertisers. As we described in the talk, our vision to accomplish this involved three phases:</strong></p>
<p><div class="wp-image aligncenter wp-image-1544 size-large"><amp-img layout='responsive' width="945" height="369" src="https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-3-59-13-pm.png?w=660&#038;h=258" srcset="https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-3-59-13-pm.png?w=660&amp;h=258 660w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-3-59-13-pm.png?w=150&amp;h=59 150w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-3-59-13-pm.png?w=300&amp;h=117 300w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-3-59-13-pm.png?w=768&amp;h=300 768w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-3-59-13-pm.png 945w" sizes="(max-width: 660px) 100vw, 660px"></amp-img></p>
<p><strong>The first phase was completed when the AMP Project originally launched nearly two years ago and as of last week, we have hit another milestone in this roadmap by completing phase 2. The rest of this post explains what we accomplished in phase 2.</strong></p>
<p><strong>Major ad networks like AdZerk, DoubleClick, AdSense and TripleLift are already serving AMP Ads, taking advantage of the infrastructure built in phase 2. This launch not only makes AMP Ads render faster, but also makes regular ads on AMP pages faster.</strong></p>
<h3><strong>Launching Fast Fetch</strong></h3>
<p><strong>The biggest addition in phase 2 is ‘Fast Fetch.’ With Fast Fetch, we separate when the ad request is made from when the ad response is rendered. This allows us to make an ad request very early in the lifecycle of the page for all ad slots and only render the ads before the user is about to view them.</strong></p>
<p><strong>This is in contrast to what we call ‘Delayed Fetch,’ the legacy mechanism of requesting ads. In Delayed Fetch, ad request and rendering are done in one action which results in the user seeing a ‘loading indicator’ waiting for the ad to load. Delayed Fetch also has an additional constraint: the runtime does not request the next ad slot on the page for at least one more second to avoid conflicts with regular page content being able to</strong><strong> load.</strong></p>
<p><div class="wp-image aligncenter wp-image-1545 size-large"><amp-img layout='responsive' width="690" height="359" src="https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-01-28-pm.png?w=660&#038;h=343" srcset="https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-01-28-pm.png?w=660&amp;h=343 660w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-01-28-pm.png?w=150&amp;h=78 150w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-01-28-pm.png?w=300&amp;h=156 300w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-01-28-pm.png 690w" sizes="(max-width: 660px) 100vw, 660px"></amp-img></p>
<center><i><strong>With Fast Fetch, ads are requested much earlier in the lifecycle of the page, allowing page rendering and creative selection in the ad server to happen in parallel.</strong></i><br />
<div class="wp-image aligncenter wp-image-1548 "><amp-img layout='responsive' width="329" height="157" src="https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-13-24-pm.png?w=308&#038;h=147" srcset="https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-13-24-pm.png?w=308&amp;h=147 308w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-13-24-pm.png?w=150&amp;h=72 150w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-13-24-pm.png?w=300&amp;h=143 300w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-13-24-pm.png 329w" sizes="(max-width: 308px) 100vw, 308px"></amp-img></center>
<center><i><strong>Fast Fetch is 850ms faster at the 50th percentile and 2.7s faster at the 90th percentile as compared to Delayed Fetch.</strong></i></center>
<h3><strong>Collaborative rendering for AMP Ads</strong></h3>
<p><strong>When the ad response is in AMP format (AMP Ads), the AMP runtime renders it immediately. If the response is a regular ad, the runtime needs to wait until the rest of the content on the page is loaded. This is possible because we can be sure that the AMP Ad is performant, but no such guarantees exist with non-AMP ads.</strong></p>
<p><div class="wp-image aligncenter wp-image-1547 size-full"><amp-img layout='responsive' width="436" height="168" src="https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-11-30-pm.png?w=660" srcset="https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-11-30-pm.png 436w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-11-30-pm.png?w=150 150w, https://amphtml.files.wordpress.com/2017/08/screen-shot-2017-08-21-at-4-11-30-pm.png?w=300 300w" sizes="(max-width: 436px) 100vw, 436px"></amp-img></p>
<center><i><strong>Based on DoubleClick and AdSense experiments, AMP Ads load up to 1.6 seconds faster at the 50th percentile and up to 5s faster at the 90th percentile.</strong></i></center>
<p><strong>The faster an ad appears on screen, the higher the viewability of the ad. This is beneficial for brand advertisers because this exposes the brand to a wider audience. This is also beneficial for performance-based advertisers because higher viewability increases the chances that a user will interact with the ad. </strong></p>
<h3><strong>Launching new features for Fast Fetch</strong></h3>
<p><strong>A number of publishers are experimenting with AMP as the format for serving their content on their primary website. To support publishers in these efforts, Fast Fetch will bring additional advanced ad capabilities to AMP in the future, such as:</strong></p>
<ul>
<li ><strong>Competitive exclusions and roadblocks for AMP pages</strong></li>
<li ><strong>Ability to refresh ads at a configurable frequency</strong></li>
<li ><strong>Support for enhancing ad requests with targeting information to the ad server in real-time</strong></li>
</ul>
<h3><strong>If you’re a publisher (or an advertiser):</strong></h3>
<p><strong>Thanks to DoubleClick and AdSense, eligible ads are automatically converted to AMP when the ad request is from an AMP page. You can expect this volume to increase as more formats are AMP convertible and as a result, benefit from higher viewability and click through rates of the ads served to your pages, without you making any changes.</strong></p>
<h3><strong>If you’re an advertiser (or publisher) who develops the creative:</strong></h3>
<p><strong>If you develop ads (whether you are a publisher or an advertiser), consider switching to AMP Ads to benefit from faster ads with high viewability and a great user experience. To get started, refer your in-house creative developers to this </strong><a href="https://github.com/ampproject/amphtml/blob/master/ads/google/a4a/docs/a4a-readme.md"><strong>AMP Ads developer FAQ</strong></a><strong>.</strong></p>
<p><strong>If you outsource development of your creative assets, you can work with an agency like </strong><a href="http://joystickinteractive.com/amp/"><strong>JoyStick Interactive</strong></a><strong>, who specialize in making AMP creatives. If you’re used to building assets using ad development tools, consider using </strong><a href="https://vimeo.com/218059345"><strong>Celtra&#8217;s </strong><strong>A</strong><strong>d</strong> <strong>C</strong><strong>r</strong><strong>e</strong><strong>a</strong><strong>t</strong><strong>o</strong></a><strong><a href="https://vimeo.com/218059345">r </a>to generate AMP Ads. AMP Ad support for other tools like </strong><a href="https://www.google.com/webdesigner/"><strong>Google Web Designer</strong></a><strong> is also coming soon.</strong></p>
<h3><strong>If you’re an ad tech platform: : </strong></h3>
<p><strong>DoubleClick and Adsense ad tags are using Fast Fetch and seeing a tremendous decrease in latency. We’d like all ad networks to transition to Fast Fetch. Here’s a </strong><a href="https://github.com/ampproject/amphtml/blob/master/ads/google/a4a/docs/Network-Impl-Guide.md"><strong>guide</strong></a><strong> to help you transition. For AMP Ad signing, you can either work with Cloudflare to use their </strong><a href="https://blog.cloudflare.com/firebolt/"><strong>Firebolt service</strong></a><strong> or, if you’re interested in signing AMP Ads yourself, reach out to us on </strong><a href="https://github.com/ampproject/amphtml/issues/new"><strong>Github</strong></a><strong>.</strong></p>
<p><i><strong>“Cloudflare Firebolt makes it easy for any ad network to sign and serve ads globally with almost no additional development work required,” says Dane Knecht, head of product strategy at Cloudflare. “As part of our mission to help build a better Internet, Firebolt further enhances the global AMP ad experience, making it faster and more secure and resulting in better conversion rates.”</strong></i></p>
<p><strong>AMP Ads are also supported now on DoubleClick </strong><a href="https://developers.google.com/ad-exchange/rtb/amp-ads"><strong>Ad Exchange</strong></a><strong> (via Real Time Bidding) and DSPs can start supporting delivering their </strong><a href="https://github.com/ampproject/amphtml/blob/master/ads/google/a4a/docs/RTBExchangeGuide.md"><strong>AMP ads over RTB</strong></a><strong>.</strong></p>
<p><strong>We’ve come a long way with advertising in AMP, and we’re excited to head into phase 3. This includes:</strong></p>
<ul>
<li ><strong>Empowering ad networks to auto-convert and deliver AMP Ads.</strong></li>
<li ><strong>Having ad servers support uploading and delivering custom made AMP Ads.</strong></li>
<li ><strong>Building functionality that helps creative developers build AMP Ads.</strong></li>
<li ><strong>Partnering with more ad creation tools to output AMP Ads by default.</strong></li>
</ul>
<p><strong>As always, we look forward to hearing your feedback or opportunities on any of the above to partner for a better web.</strong></p>
<p><i><strong>Posted by Vamsee Jasti, Product Manager, AMP Project</strong></i></p><br />  
</div>

