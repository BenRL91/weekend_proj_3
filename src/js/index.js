// Javascript Entry Point
import etsyData from './etsy'
import $ from 'jquery'

var items = etsyData.results

var productDisplay = items.map(function(obj){
	var imgURL = obj.Images[0].url_170x135
	var prodTitle = obj.title
	var prodPrice = obj.price
	var shopName = obj.Shop.shop_name
	var currCode = obj.currency_code
		return `<div class="prodInfo">
					<img id="heart" src="./css/heart.png">
					<img id="hamburger" src="./css/hamburger.png">
					<div class="triangle_holder">
					<div class='triangle'></div>
					</div>
					<img src=${imgURL}>
					<div class="shop">
						<span class="title">${prodTitle} 
						<span>${shopName}</span>
						</span>
					</div>
					<span class="price_contain">
					<span class="shopName">${shopName}</span>
					<span class="price">${prodPrice} ${currCode}</span>
					</span>
				</div>`
	})

var main2 = $(".main2wrapper")

main2.append(productDisplay)

var hamburger = $("#hamburger")
var heart = $("#heart")