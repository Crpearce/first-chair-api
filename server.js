const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.set("port", process.env.PORT || 3001);

app.locals.title = 'FirstChair';

app.locals.resorts = [
    {
      id: 1,
      name: "Arapahoe Basin",
      overview:
        "Arapahoe Basin boasts having one of the longest ski seasons for skiing in Colorado. It has the highest skiable terrain in North America with a summit elevation of 13,050 feet. Set at the base of the Continental Divide on Loveland Pass, A-Basin offers over a hundred expertly carved trails, above timberline bowls and deep powder stashes.",
      region: "Summit County",
      logo:"https://res.cloudinary.com/liftopia/image/upload/b_transparent,c_pad,g_center,h_175,w_263/v1501470630/production/logos/3ff3c543f0a88014efefe64eb5280d14.png",
      closest_Town: "Georgetown, Colorado",
      verticle: 2530,
      summit: 13050,
      snowfall: 350,
      trails: 147,
      acres: 1428,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303001-2400.jpg",
      lifttix:
        "https://store.arapahoebasin.com/s/lift-tickets/c/full-day-lift-tickets",
      live_Cam: "https://www.arapahoebasin.com/the-mountain/webcams/",
      hours: 1,
      pass: "https://www.ikonpass.com/static/media/ikon-pass-logo.2beb7782.png",
      type: 'ikon'
    },
    {
      id: 2,
      name: "Aspen",
      overview:
        "Aspen is part of an expansive winter playground with four unique neighbouring mountains (Aspen, Aspen Highlands, Snowmass and Butternut) with 5,527 total acres of terrain. Aspen Mountain has been the place to go since 1947 for ski holidays in Colorado.",
      region: "Pitkin County",
      logo:'https://www.coloradoski.com/sites/default/files/inline-images/14_ASC_ASPENMOUNTAIN_Stacked_Black.png',
      closest_Town: "Aspen, Colorado",
      verticle: 3267,
      summit: 11212,
      snowfall: 300,
      trails: 76,
      acres: 675,
      ski_Map: "https://cdn.ski/QtK48fotJauPfoyW.jpeg",
      lifttix:
        "https://shop.aspensnowmass.com/s/all-lift-tickets/c/lift-tickets-3",
      live_Cam:
        "https://www.aspensnowmass.com/four-mountains/aspen-mountain/mountain-cams",
      hours: 4,
      pass: "https://www.ikonpass.com/static/media/ikon-pass-logo.2beb7782.png",
      type: 'ikon'
    },
    {
      id: 3,
      name: "Aspen Highlands",
      overview:
        "Aspen Highlands is part of an expansive winter playground with four unique neighbouring mountains (Aspen, Aspen Highlands, Snowmass and Butternut) with 5,527 total acres of terrain. Aspen Highlands is the less known mountain, popular with locals for the lack of crowds and hiking up to the Highland Bowl.",
      region: "Pitkin County",
      logo:"https://www.coloradoski.com/sites/default/files/inline-images/14_ASC_ASPENHIGHLANDS_Stacked_Black.png",
      closest_Town: "Aspen, Colorado",
      verticle: 3635,
      summit: 11675,
      snowfall: 300,
      trails: 144,
      acres: 1040,
      ski_Map: "https://www.aspensnowmass.com/-/media/aspen-snowmass/images/image-cta-with-title-and-description/image-cta-card-wide/winter/2021-22/highlands-trail-map-image-cta-wide-07302021.jpg?mw=1600&mh=488&hash=CA6EFCC3F2C92E0515D6212AD918D133",
      lifttix:
        "https://shop.aspensnowmass.com/s/all-lift-tickets/c/lift-tickets-3",
      live_Cam:
        "https://www.aspensnowmass.com/four-mountains/aspen-highlands/mountain-cams",
      hours: 4,
      pass: "https://www.ikonpass.com/static/media/ikon-pass-logo.2beb7782.png",
      type: 'ikon'
    },
    {
      id: 4,
      name: "Beaver Creek",
      overview: `Colorado's youngest resort is easily accessible from Denver. The resort is comprised of three villages, the main Beaver Creek Village, Bachelor Gulch, and Arrowhead. The towns of Avon and Edwards are located minutes from the resort and offer many lodging and dining options. The mountain hosts world class competitions`,
      region: "Eagle County",
      logo: 'https://logos-download.com/wp-content/uploads/2019/01/Beaver_Creek_Logo.png',
      closest_Town: "Avon, Colorado",
      verticle: 4040,
      summit: 11440,
      snowfall: 310,
      trails: 149,
      acres: 1815,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303005-2400.jpg",
      lifttix:
        "https://www.beavercreek.com/plan-your-trip/lift-access/tickets.aspx",
      live_Cam:
        "https://www.beavercreek.com/the-mountain/mountain-conditions/mountain-cams.aspx",
      hours: 3,
      pass: "https://static.wixstatic.com/media/6c47ef_526275ae9eae4a64bd748509405010bd~mv2.png/v1/crop/x_98,y_33,w_398,h_167/fill/w_318,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Epic%20Pass%20Logo.png",
      type: 'epic'
    },
    {
      id: 5,
      name: "Breckenridge",
      overview: `As one of North America's top visited resorts, Breckenridge offers 146 trails span through four interconnected mountains, making Breckenridge Summit County's largest ski area. Features 25 acres of innovative terrain parks (5 in all), steep chutes, wide open bowls for backcountry style skiing, and easy cruisers. Breckenridge is sure to please experts and beginners alike. Breckenridge celebrates their 50th anniversary this season`,
      region: "Summit County",
      logo: 'https://logos-download.com/wp-content/uploads/2019/01/Breckenridge_Ski_Resort_Logo.png',
      closest_Town: "Breckenridge, Colorado",
      verticle: 3398,
      summit: 12998,
      snowfall: 300,
      trails: 155,
      acres: 2358,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303007-2400.jpg",
      lifttix:
        "https://www.breckenridge.com/plan-your-trip/lift-access/tickets.aspx",
      live_Cam:
        "https://gobreck.com/experience-breckenridge/breckenridge-web-cams",
      hours: 2,
      pass: "https://static.wixstatic.com/media/6c47ef_526275ae9eae4a64bd748509405010bd~mv2.png/v1/crop/x_98,y_33,w_398,h_167/fill/w_318,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Epic%20Pass%20Logo.png",
      type: 'epic'
    },
    {
      id: 6,
      name: "Buttermilk",
      overview:
        "Buttermilk is part of an expansive winter playground with four unique neighbouring mountains (Aspen, Aspen Highlands, Snowmass and Butternut) with 5,527 total acres of terrain. Buttermilk is the smallest of the 4. Terrain parks, pipes and pristine trails add up to the Buttermilk experience. Best known as home to the Winter X Games Buttermilk has something to offer all levels of experience.",
      region: "Pitkin County",
      logo:'https://www.coloradoski.com/sites/default/files/inline-images/14_ASC_BUTTERMILK_Black.png',
      closest_Town: "Aspen, Colorado",
      verticle: 2030,
      summit: 9900,
      snowfall: 200,
      trails: 44,
      acres: 470,
      ski_Map: "https://cdn.ski/pD3nQhulK9YUUbO1.jpeg",
      lifttix:
        "https://shop.aspensnowmass.com/s/all-lift-tickets/c/lift-tickets-3",
      live_Cam:
        "https://www.aspensnowmass.com/four-mountains/buttermilk/mountain-cams",
      hours: 4,
      pass: "https://www.ikonpass.com/static/media/ikon-pass-logo.2beb7782.png",
      type: 'ikon'
    },
    {
      id: 7,
      name: "Copper Mountain",
      overview: `About 75 miles west of Denver in Summit County is Copper Mountain Resort. It's nicknamed Colorado's Friendliest Resort. Frisco which is 8 miles east of the resort is the closest town. Copper Mountain is divided into three villages; East Village, The Village at Copper and Union Creek.`,
      region: "Summit County",
      logo: 'https://usskiandsnowboard.org/sites/default/files/partner-logos/2018-04/Copper--Mountain--Logo.png',
      closest_Town: "Frisco, Colorado",
      verticle: 2601,
      summit: 12313,
      snowfall: 282,
      trails: 126,
      acres: 2465,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303009-2400.jpg",
      lifttix:
        "https://www.coppercolorado.com/plan-your-trip/lift-tickets/tickets?gclid=Cj0KCQjwhsmaBhCvARIsAIbEbH7afRTTvYXlK2LSm7ThuYxA0PSClRALdS8ZJ_4QsG8_WDU4hjIYBTgaAno7EALw_wcB&gclsrc=aw.ds",
      live_Cam: "https://www.coppercolorado.com/the-mountain/webcams/mountain",
      hours: 2,
      pass: "https://www.ikonpass.com/static/media/ikon-pass-logo.2beb7782.png",
      type: 'ikon'
    },
    {
      id: 8,
      name: "Crested Butte",
      overview: `Crested Butte has more than 1,000 acres and 2,775 vertical feet of varied terrain. Enjoy your ski holiday near Gunnison, Colorado. Known for offering extreme and diverse terrain, the mountain is considered one of the birthplaces of freeskiing. The peaks of the Crested Butte Mountain Resort offer expert bowls, steeps and long cruisers for advanced skiers, as well as extensive, open blue and green runs for intermediate and beginners as well.`,
      region: "Gunnison County",
      logo: 'https://www.adaptivesports.org/sites/default/files/CBMR_Logo_Vert.png',
      closest_Town: "Crested Butte, Colorado",
      verticle: 2775,
      summit: 12162,
      snowfall: 300,
      trails: 121,
      acres: 1167,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303010-2400.jpg",
      lifttix: "https://www.skicb.com/plan-your-trip/lift-access/tickets.aspx",
      live_Cam:
        "https://www.https://www.skicb.com/the-mountain/mountain-conditions/mountain-cams.aspx",
      hours: 3,
      pass: "https://static.wixstatic.com/media/6c47ef_526275ae9eae4a64bd748509405010bd~mv2.png/v1/crop/x_98,y_33,w_398,h_167/fill/w_318,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Epic%20Pass%20Logo.png",
      type: 'epic'
    },
    {
      id: 9,
      name: "Echo Mountain",
      overview:
        "Echo Mountain is a small, family-run ski resort located less than one hour from Denver. The resort is a premier race training facility in November and opens to the public in December.",
      region: "Clear Creek County",
      logo: 'https://cdn.dribbble.com/users/46461/screenshots/8963498/echo-1_4x.jpg',
      closest_Town: "Idaho Springs, Colorado",
      verticle: 660,
      summit: 10650,
      snowfall: 220,
      trails: 16,
      acres: 200,
      ski_Map: "https://www.skicentral.com/images/trailmaps/720001-1200.jpg",
      lifttix: "https://echomntn.com/lift-tickets",
      live_Cam:
        "https://www.coloradowebcam.net/camera/echo-mountain-ski-webcam-colorado-ski-resort-webcams",
      hours: 1,
      pass: '',
      type: ''
    },
    {
      id: 10,
      name: "Eldora",
      overview:
        "Located a few miles west of Nederland, Eldora Mountain Resort is the closest ski area to Boulder, and one of very few east of the Continental Divid. It is the second closest ski area to Denver. The summit elevation of 10,800 feet means your ski vacation package will include lots of natural snow.",
      region: "Boulder County",
      logo: 'https://emsc.lertprograms.com/wp-content/uploads/2017/12/eldoralogo_transparent.png',
      closest_Town: "Nederland, Colorado",
      verticle: 1600,
      summit: 10800,
      snowfall: 300,
      trails: 53,
      acres: 680,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303011-2400.jpg",
      lifttix:
        "https://www.eldora.com/plan-your-trip/tickets-passes/lift-tickets-passes/alpine-lift-tickets",
      live_Cam: "https://www.eldora.com/the-mountain/webcams/snow-stake-cam",
      hours: 1,
      pass: "https://www.ikonpass.com/static/media/ikon-pass-logo.2beb7782.png",
      type: 'ikon'
    },
    {
      id: 11,
      name: "Howelsen Hill",
      overview:
        "Colorado Steamboat Springs ski area with a long history of producing world class skiers. This city run ski area is where the locals train. Founded in 1913, Howelsen Hill is the oldest ski area in continuous use in Colorado, and has the largest and most complete natural ski jumping complex in North America.",
      region: "Routt County",
      logo: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_396,q_75,w_704/https://assets.simpleviewinc.com/simpleview/image/upload/crm/steamboat/Howelsen-Hill0_4834dd0a-5056-a36a-0bc098007b7b9030.png',
      closest_Town: "Steamboat Springs, Colorado",
      verticle: 440,
      summit: 7136,
      snowfall: 150,
      trails: 17,
      acres: 100,
      ski_Map: "https://www.steamboatsprings.net/ImageRepository/Document?documentID=20469",
      lifttix: "https://steamboatsprings.net/298/Lift-Tickets",
      live_Cam: "https://www.steamboatsprings.net/783/360-Ski-Jump-Video",
      hours: 4,
      pass: '',
      type: ''
    },
    {
      id: 12,
      name: "Kendall Mountain",
      overview:
        "Kendall Mountain offers affordable winter fun for the whole family in Silverton, Colorado. This ski recreation area has 240 ft vertical drop with 4 runs and also offers a variety of other outdoor recreation including cross country, snowshoeing, sledding and ice skating.",
      region: "San Juan County",
      closest_Town: "Silverton, Colorado",
      logo: 'https://images.squarespace-cdn.com/content/v1/5dade5d6f3de04278ab5ade9/1571684117393-2RLE3HMGL8UPCLFC7HGA/Kendall+Logo+-+No+Background.png?format=1500w',
      verticle: 240,
      summit: 7600,
      snowfall: 200,
      trails: 4,
      acres: 20,
      ski_Map: "https://images.squarespace-cdn.com/content/v1/5dade5d6f3de04278ab5ade9/1572538676771-GIKU5P0148RTON4N579G/image-asset.jpeg?format=1000w",
      lifttix: "https://www.skikendall.com/lift-tickets-passes",
      live_Cam: "https://keno.org/colorado_web_cams/silverton_cams.htm",
      hours: 7,
      pass: '',
      type: ''
    },
    {
      id: 13,
      name: "Keystone",
      overview:
        `Located 90 minutes from Denver, Keystone is comprised of 3 mountains with a summit elevation of 12,408 ft. This resort features one of Colorado's largest terrain night parks. With an abundance of activities for every season, a host of restaurant options from casual to fine dining, and plenty of lodging options, Keystone has it all.`,
      region: "Summit County",
      logo: 'http://ams.allmountainsigns.com/wp-content/uploads/2020/08/logo-keystone.png',
      closest_Town: "Keystone, Colorado",
      verticle: 3128,
      summit: 12408,
      snowfall: 230,
      trails: 135,
      acres: 3148,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303014-2400.jpg",
      lifttix:
        "https://www.keystoneresort.com/Plan-Your-Trip/Lift-Access/tickets",
      live_Cam: "https://www.keystoneresort.com/the-mountain/mountain-conditions/mountain-cams.aspx",
      hours: 2,
      pass: "https://static.wixstatic.com/media/6c47ef_526275ae9eae4a64bd748509405010bd~mv2.png/v1/crop/x_98,y_33,w_398,h_167/fill/w_318,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Epic%20Pass%20Logo.png",
      type: 'epic'
    },
    {
      id: 14,
      name: "Loveland",
      overview:
        "Loveland Ski Area is located near the town of Georgetown. The area is comprised of Loveland Basin and Loveland Valley ski areas with access to both by shuttle bus. Its location atop the Continental Divide along with the volume of natural snow makes Loveland one of the best places in Colorado to ski powder.",
      region: "Summit County",
      logo: 'https://skiloveland.com/wp-content/uploads/2015/01/lovelandLogo1.png',
      closest_Town: "Georgetown, Colorado",
      verticle: 2210,
      summit: 13010,
      snowfall: 305,
      trails: 93,
      acres: 1570,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303015-2400.jpg",
      lifttix: "https://skiloveland.com/lift-tickets/",
      live_Cam: "https://skiloveland.com/web-cams/",
      hours: 1,
      pass: '',
      type: ''
    },
    {
      id: 15,
      name: "Monarch",
      overview:
        "Monarch Mountain is located in south central Colorado only 2 hours from Colorado Springs and less than 3.5 hours from Denver. Located on Highway 50 on the Continental Divide Monarch is very accessible. Monarch offers skiing for families plus steep terrain, tree skiing, fresh powder snow and Snowcat skiing for expert and advanced skiers.",
      region: "Chaffee County",
      logo: 'https://www.uncovercolorado.com/wp-content/uploads/2013/12/Monarch-Mountain-Logo.png',
      closest_Town: "Salida, Colorado",
      verticle: 1162,
      summit: 11952,
      snowfall: 350,
      trails: 63,
      acres: 800,
      ski_Map: "https://www.skicentral.com/images/trailmaps/719002-2400.jpg",
      lifttix: "https://skimonarch.com/tickets/",
      live_Cam: "https://www.onthesnow.com/colorado/monarch-mountain/webcams",
      hours: 3,
      pass: '',
      type: ''
    },
    {
      id: 16,
      name: "Powderhorn",
      overview: "Powderhorn Mountain Resort is located 35 miles east of Grand Junction, Colorado on the world's largest flat-top mountain. This unique location offers panoramic views across the desert below. Powderhorn has a wide variety of terrain with a few long groomed runs plus tree runs and boulder fields full of jumps and cliffs for expert skiing and boarding.",
      region: "Mesa County",
      logo: 'https://visitpalisade.com/wp-content/uploads/2020/01/horizantal-logo_36105d39175b9a6a67b10e7470894996.png',
      closest_Town: "Mesa, Colorado",
      verticle: 1650,
      summit: 9850,
      snowfall: 250,
      trails: 63,
      acres: 600,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303016-2400.jpg",
      lifttix: "https://www.powderhorn.com/index.php/plan-purchase/purchase/lift-tickets",
      live_Cam: "https://www.powderhorn.com/explore/conditions/webcams.html",
      hours: 4,
      pass: '',
      type: ''
    },
    {
      id: 17,
      name: "Purgatory",
      overview: "Purgatory Resort (formerly Durango) is a ski vacation destination located north of Durango in the San Juan Mountains of southwestern Colorado. The mountain offers terrain for all abilities, two terrain parks and a kids play area. The historic town of Durango is located 25 miles south where you can find an array of shopping, dining and lodging.",
      region: "La Plata County",
      logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1509761657/lm76bcb2yrqb4ltcgizl.png',
      closest_Town: "Durango, Colorado",
      verticle: 2029,
      summit: 10822,
      snowfall: 260,
      trails: 88,
      acres: 250,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303017-2400.jpg",
      lifttix: "https://www.purgatory.ski/mountain/lift-tickets/",
      live_Cam: "https://www.purgatory.ski/mountain/weather-conditions-webcams/webcams/",
      hours: 7,
      pass: '',
      type: ''
    },
    {
      id: 18,
      name: "Silverton",
      overview: "Silverton Mountain is an expert only ski area. Avalanche gear is required to ride the lift at all times. There are no groomers, no clear cut on one chair to bring you up to a real mountain experience. The ski area is one hour north of Durango.",
      region: "San Juan County",
      logo: 'https://silvertonmountain.com/wp-content/themes/silvertonmountain/images/logo-vert-lrg.png',
      closest_Town: "Silverton, Colorado",
      verticle: 1900,
      summit: 13487,
      snowfall: 400,
      trails: 0,
      acres: 1819,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303387-1200.jpg",
      lifttix: "https://silvertonmountain.com/shop/lift-tickets/",
      live_Cam: "https://silvertonmountain.com/mountain/snow-report/",
      hours: 7,
      pass: '',
      type: ''
    },
    {
      id: 19,
      name: "Silverton Powdercats",
      overview:
        "High altitude powder adventure mountain guides based in Colorado. Find endless powder skiing or snowboarding seven miles above Silverton, Colorado atop Molas Pass. Terrain includes chutes, steeps, glades and open bowls. Enjoy amazing views above tree-line.",
      region: "San Juan County",
      logo: 'https://static1.squarespace.com/static/5dab434a08b7317b04ea7768/t/5dc5b79b86f2bd72887a3147/1664891898014/',
      closest_Town: "Silverton, Colorado",
      verticle: 1500,
      summit: 13005,
      snowfall: 380,
      trails: 0,
      acres:1000,
      ski_Map: "https://coloradopirateadventures.com/templates/yootheme/cache/b4/greater-alpine-loop-map-1024x740_orig-b4a06357.jpeg",
      lifttix: "https://www.silvertonpowdercats.com/schedule",
      live_Cam: "https://silvertonmountain.com/mountain/snow-report/",
      hours: 7,
      pass: '',
      type: ''
    },
    {
      id: 20,
      name: "Ski Cooper",
      overview: "Ski Cooper is located near Colorado Springs, Denver, Summit County and Vail 9 miles from Leadville, Colorado. Ski Cooper will take you as high as 12,600 feet in elevation atop the Continental Divide. Experience snowcat skiing and boarding or snowcat tours atop the Continental Divide.",
      region: "Eagle County",
      logo: 'https://www.skicooper.com/coopwp/wp-content/uploads/2018/04/Cooper-Logo-Outline_color_black-Cooper-1.png',
      closest_Town: "Leadville, Colorado",
      verticle: 1200,
      summit: 11700,
      snowfall: 260,
      trails: 59,
      acres: 470,
      ski_Map: "https://www.skicentral.com/images/trailmaps/skicooper-1200.jpg",
      lifttix: "https://www.skicooper.com/cooper-day-pass/",
      live_Cam: "https://www.skicooper.com/weather-webcams/",
      hours: 2,
      pass: '',
      type: ''
    },
    {
      id: 21,
      name: "Ski Granby Ranch",
      overview: "Granby Ranch is an affordable family ski vacation destination 80 miles west of Denver, Colorado. Ski Granby Ranch's easy access, wide-open terrain includes beginner, intermediate, and advanced runs, as well as a terrain park with progressive features.",
      region: "Grand County",
      logo: 'https://www.golfclubreceptions.com/images/venues/granby_ranch/logo_granbyranch.png',
      closest_Town: "Grandby, Colorado",
      verticle: 1000,
      summit: 9202,
      snowfall: 220,
      trails: 33,
      acres: 406,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303018-1200.jpg",
      lifttix:"https://granbyranch.com/tickets-passes/",
      live_Cam: "https://granbyranch.com/mountain-info/",
      hours: 2,
      pass: '',
      type: ''
    },
    {
      id: 22,
      name: "Ski Hesperus",
      overview: "Ski Hesperus is Southwest Colorado's local's secret. It is a no frills lighted ski area with a 700ft vertical located on US Highway 160, 11 miles west of Durango, Colorado. The resort is currently listed for sale.",
      region: "La Plata County",
      logo: 'https://static.wixstatic.com/media/9b4fd2_09d7e6ff6b6147d8b0e453475e3d183a~mv2.png/v1/fill/w_380,h_274,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Hesperus.png',
      closest_Town: "Hesperus, Colorado",
      verticle: 700,
      summit: 8880,
      snowfall: 150,
      trails: 13,
      acres: 80,
      ski_Map: "https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/825584c47174532bc52901611fa3fce6.jpg",
      lifttix: "https://www.ski-hesperus.com/lift-tickets/",
      live_Cam: "https://www.ski-hesperus.com/mountain-cam/",
      hours: 8,
      pass: '',
      type: ''
    },
    {
      id: 23,
      name: "Snowmass",
      overview: "Snowmass is part of an expansive winter playground with four unique neighbouring mountains (Aspen, Aspen Highlands, Snowmass and Butternut) with 5,527 total acres of terrain. Snowmass is the largest of the four areas being bigger than the other three combined and the crowning jewel for Colorado snow.",
      region: "Pitkin County",
      logo: 'https://www.lucyleatucker.net/wp-content/uploads/2018/02/ASC-e1524529473526.png',
      closest_Town: "Aspen, Colorado",
      verticle: 4406,
      summit: 12510,
      snowfall: 300,
      trails: 98,
      acres: 3342,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303020-2400.jpg",
      lifttix: "https://shop.aspensnowmass.com/s/all-lift-tickets/c/lift-tickets-3",
      live_Cam: "https://www.aspensnowmass.com/four-mountains/mountain-cams",
      hours: 4,
      pass: "https://www.ikonpass.com/static/media/ikon-pass-logo.2beb7782.png",
      type: 'ikon'
    },
    {
      id: 24,
      name: "Steamboat",
      overview: "157 miles northwest of Denver, Colorado is the Ski Town of Steamboat. On-mountain improvements have erupted at the Steamboat Ski Area designed to make your visit to Steamboat better. Steamboat has a unique history of western culture producing a vacation experience of a lifetime.",
      region: "Routt County",
      logo: 'https://s3.amazonaws.com/shipsticks_partner_assets_production/uploads/05d44d45-2bc1-4a8c-bb9a-67743ed76343.png',
      closest_Town: "Steamboat Springs, Colorado",
      verticle: 3668,
      summit: 10568,
      snowfall: 349,
      trails: 165,
      acres: 2965,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303021-2400.jpg",
      lifttix: "https://activities.steamboat.com/Ecomm/Shop/Calendar/5371193/en-US/?productcategoryid=117&startmonth=12&startYear=2022&agecategory=8&days=1",
      live_Cam: "https://www.steamboat.com/the-mountain/live-cams",
      hours: 4,
      pass: "https://www.ikonpass.com/static/media/ikon-pass-logo.2beb7782.png",
      type: 'ikon'
    },
    {
      id: 25,
      name: "Steamboat Powdercats",
      overview: "Steamboat Powdercats will put together a snowcat trip that should provide you with an excellent day in the backcountry of Buffalo Pass on the Eastern side of Steamboat Springs.",
      region: "Routt County",
      logo: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_pad,h_370,q_70,w_560/https://assets.simpleviewinc.com/simpleview/image/upload/crm/steamboat/Steamboat-Powdercats10_48821255-5056-a36a-0b208686bedf349c.jpg',
      closest_Town: "Steamboat Springs, Colorado",
      verticle: 0,
      summit: 0,
      snowfall: 375,
      trails: 0,
      acres: 1500,
      ski_Map: "https://beaconguidebooks.com/wp-content/uploads/Buff-Pass-Map-Sample-Section-800-x-800.jpg",
      lifttix: "https://www.steamboatpowdercats.com/reserve/",
      live_Cam: "https://www.steamboat.com/the-mountain/live-cam",
      hours: 4,
      pass: '',
      type: ''
    },
    {
      id: 26,
      name: "Sunlight Mountain",
      overview: "A diverse 470 acre winter playground for an affordable, family oriented ski vacation near Glenwood Springs, Colorado. Sunlight Mountain features 67 named trails, one of the steepest runs in the state and some of the best tree skiing in Colorado.",
      region: "Garfield County",
      logo: 'https://www.indyskipass.com/wp-content/uploads/2022/02/sunlight-logo-color.png',
      closest_Town: "Glenwood Springs, Colorado",
      verticle: 2010,
      summit: 9895,
      snowfall: 250,
      trails: 67,
      acres: 470,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303019-1200.jpg",
      lifttix: "https://sunlightmtn.com/?keyword=LiftTickets",
      live_Cam: "https://sunlightmtn.com/the-mountain/live-cams/snow-cam",
      hours: 3,
      pass: '',
      type: ''
    },
    {
      id: 27,
      name: "Telluride",
      overview: "Telluride Ski Resort is a world-class ski resort and summer vacation resort located in the San Juan Mountains in Telluride, Colorado. Getting to Telluride is easy with non-stop flights from 8 U. S. cities. From refined groomed runs to challenging moguls, there truly is something for everyone.",
      region: "San Miguel County",
      logo: 'http://ams.allmountainsigns.com/wp-content/uploads/2020/08/logo-telluride.png',
      closest_Town: "Telluride, Colorado",
      verticle: 3845,
      summit: 12570,
      snowfall: 309,
      trails: 125,
      acres: 2000,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303022-1200.jpg",
      lifttix: "https://tellurideskiresort.com/ski/",
      live_Cam: "https://tellurideskiresort.com/webcams/",
      hours: 7,
      pass: "https://static.wixstatic.com/media/6c47ef_526275ae9eae4a64bd748509405010bd~mv2.png/v1/crop/x_98,y_33,w_398,h_167/fill/w_318,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Epic%20Pass%20Logo.png",
      type: 'epic'
    },
    {
      id: 28,
      name: "Vail",
      overview: "Vail is one of North America's top ski resort destination with 5317 acres of skiable terrain. Features seven bowls, and gladed terrain in the new Blue Sky Basin area along with more groomed terrain than any other resort. Located about 100 miles west of Denver.",
      region: "Eagle County",
      logo: 'http://ams.allmountainsigns.com/wp-content/uploads/2020/08/logo-vail.png',
      closest_Town: "Vail, Colorado",
      verticle: 3450,
      summit: 11570,
      snowfall: 310,
      trails: 195,
      acres: 5317,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303023-2400.jpg",
      lifttix: "https://www.vail.com/",
      live_Cam: "https://www.vail.com/the-mountain/mountain-conditions/mountain-cams.aspx",
      hours: 3,
      pass: "https://static.wixstatic.com/media/6c47ef_526275ae9eae4a64bd748509405010bd~mv2.png/v1/crop/x_98,y_33,w_398,h_167/fill/w_318,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Epic%20Pass%20Logo.png",
      type: 'epic'
    },
    {
      id: 29,
      name: "Winter Park",
      overview: "Winter Park Resort, one of the largest ski resorts in Colorado is located 67 miles northwest of Denver and is Colorado's longest continually operated ski resort. It offers award-winning terrain, terrain parks, steeps, trees and deeps. The resort consists of three interconnected mountain peaks which share a common lift ticket.",
      region: "Grand County",
      logo: 'https://blog.winterparkresort.com/wp-content/uploads/2017/10/winterpark.png',
      closest_Town: "Winter Park, Colorado",
      verticle: 2610,
      summit: 12060,
      snowfall: 350,
      trails: 143,
      acres: 2733,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303024-2400.jpg",
      lifttix:"https://www.winterparkresort.com/plan-your-trip/deals-and-packages/flex-lift-tickets#filters=start-date:2022-11-9",
      live_Cam: "https://www.winterparkresort.com/the-mountain/mountain-cams",
      hours: 2,
      pass: "https://www.ikonpass.com/static/media/ikon-pass-logo.2beb7782.png",
      type: 'ikon'
    },
    {
      id: 30,
      name: "Wolf Creek",
      overview: "Wolf Creek's seven lifts service incredibly beautiful terrain, over 1,600 acres and is located 24 miles northeast of Pagosa Springs. It is known for receiving higher than average snowfall than any other Colorado resort.",
      region: "Mineral County",
      logo: 'https://wolfcreekski.com/wp-content/uploads/2022/09/Horizontal-Logo_Color.png',
      closest_Town: "Pagosa Springs, Colorado",
      verticle: 1604,
      summit: 11904,
      snowfall: 465,
      trails: 77,
      acres: 1600,
      ski_Map: "https://www.skicentral.com/images/trailmaps/303025-1200.jpg",
      lifttix:"https://wolfcreekski.com/tickets-passes/",
      live_Cam: "https://wolfcreekski.com/wolf-creek-ski-area-live-web-cam/",
      hours: 6,
      pass: '',
      type: ''
    }
  ]

  app.locals.runs = [
    {
      id: 1,
      name: 'Arapahoe Basin',
      runName: 'Pallavicini',
      difficulty:'Double Black Diamond'
    },
    {
      id: 2,
      name: 'Aspen Highlands',
      runName: 'Highlands Bowl',
      difficulty:'Double Black Diamond'
    },
    {
      id: 3,
      name: 'Aspen Mountain',
      runName: `Walsh's`,
      difficulty:'Double Black Diamond'
    },
    {
      id: 4,
      name: 'Beaver Creek Resort',
      runName: `Gold Dust`,
      difficulty:'Blue'
    },
    {
      id: 5,
      name: 'Breckenridge Ski Resort',
      runName: `Whale's Tail`,
      difficulty:'Double Black Diamond'
    },
    {
      id: 6,
      name: 'Breckenridge Ski Resort',
      runName: `Lake Chutes`,
      difficulty:'Double Black Diamond'
    },
    {
      id: 7,
      name: 'Buttermilk',
      runName: `Klaus' Parkway`,
      difficulty:'Black Diamond'
    },
    {
      id: 8,
      name: 'Copper Mountain',
      runName: `Andy's Encore`,
      difficulty:'Blue'
    },
    {
      id: 9,
      name: 'Crested Butte',
      runName: `Spellbound Bowl`,
      difficulty:'Double Black Diamond'
    },
    {
      id: 10,
      name: 'Eldora',
      runName: `Moose Glades`,
      difficulty:'Double Black Diamond'
    },
    {
      id: 11,
      name: 'Keystone',
      runName: `Bushwacker`,
      difficulty:'Black Diamond'
    },
    {
      id: 12,
      name: 'Loveland',
      runName: `Chet's Run`,
      difficulty:'Blue'
    },
    {
      id: 13,
      name: 'Monarch',
      runName: `Turbo`,
      difficulty:'Blue'
    },
    {
      id: 14,
      name: 'Powderhorn',
      runName: `Bill's Run`,
      difficulty:'Blue'
    },
    {
      id: 15,
      name: 'Purgatory',
      runName: `Styx`,
      difficulty:'Black Diamond'
    },
    {
      id: 16,
      name: 'Silverton',
      runName: `Cabin`,
      difficulty:'Double Black Diamond'
    },
    {
      id: 17,
      name: 'Ski Cooper',
      runName: `Trails End`,
      difficulty:'Blue'
    },
    {
      id: 18,
      name: 'Snowmass',
      runName: `Long Shot`,
      difficulty:'Blue'
    },
    {
      id: 19,
      name: 'Steamboat',
      runName: `White Out`,
      difficulty:'Black'
    },
    {
      id: 20,
      name: 'Telluride',
      runName: `See Forever`,
      difficulty:'Blue'
    },
    {
      id: 21,
      name: 'Vail',
      runName: `Inner Mongolia Bowl`,
      difficulty:'Black Diamond'
    },
    {
      id: 22,
      name: 'Winter Park',
      runName: `The Cirque`,
      difficulty:'Double Black Diamond'
    },
    {
      id: 23,
      name: 'Wolf Creek',
      runName: `Alberta Peak`,
      difficulty:'Double Black Diamond'
    }
  ]

app.get("/api/v1/resorts", (request, response) => {
  const resorts = app.locals.resorts;

  response.json({ resorts });
});

app.get("/api/v1/runs", (request, response) => {
  const runs = app.locals.runs;

  response.json({ runs });
});


  app.post('/api/v1/runs', (request, response) => {
    const { name, runName, difficulty} = request.body;
  
    if (!name || !runName || !difficulty ) {
      return response.status(422).json({
        error: 'Expected format { name: <String>, date: <String>, time: <String>, number: <Number> }. You are missing a required parameter.'
      })
    }
  
    const newRun = {id: Date.now(), name, runName, difficulty };
  
    app.locals.runs = [...app.locals.runs, newRun];
  
    return response.status(201).json(newRun);
  });
  

app.listen(app.get("port"), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get("port")}.`
  );
});
