// su kien onload
var dataSix = 0
var dataSixNumber = 6
var dataSixNumberPrev=0
console

// number là biến đếm -sản phẩm bán chạy nhất 


var data = [{
    "productName":"Gấu Nâu 1",
    "productCode":"gb0001",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Nâu đỏ",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":35,
    "like":30,
    "price":720000
}, {
    "productName":"Gấu Nâu 2",
    "productCode":"gb0002",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Vàng",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu xám 3",
    "productCode":"gb0003",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":300000
}, {
    "productName":"Gấu xám 4",
    "productCode":"gb0004",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":55,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu xám 5",
    "productCode":"gb0005",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":76,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu Nâu 6",
    "productCode":"gb0006",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Vàng",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu xám 7",
    "productCode":"gb0007",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":35,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu xám 8",
    "productCode":"gb0008",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu Nâu 9",
    "productCode":"gb0009",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Nâu đỏ",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":30,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu Nâu 10",
    "productCode":"gb00010",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Vàng",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu xám 11",
    "productCode":"gb00011",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":50000
}, {
    "productName":"Gấu xám 12",
    "productCode":"gb00012",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":57,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu xám 13",
    "productCode":"gb00013",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":73,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Gấu Nâu 14",
    "productCode":"gb00014",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Vàng",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["gau", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng15",
    "productCode":"gb00015",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":25,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng16",
    "productCode":"gb00016",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":25,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng17",
    "productCode":"gb00017",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":25,
    "like":30,
    "price":150000
}, {
    "productName":"Socola Trắng18",
    "productCode":"gb00018",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng19",
    "productCode":"gb00019",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Nâu đỏ",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":28,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng20",
    "productCode":"gb00020",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Vàng",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng21",
    "productCode":"gb00021",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng22",
    "productCode":"gb00022",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":50,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng23",
    "productCode":"gb00023",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":68,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng24",
    "productCode":"gb00024",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Vàng",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"Socola Trắng25",
    "productCode":"gb00025",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":47,
    "like":30,
    "price":50000
}, {
    "productName":"Socola Trắng26",
    "productCode":"gb00026",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["socola", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":5,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng27 ",
    "productCode":"gb00027",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":55,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng28 ",
    "productCode":"gb00028",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":65,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng 29",
    "productCode":"gb00029",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":65,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng 30",
    "productCode":"gb00030",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":65,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng 31",
    "productCode":"gb00031",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":75,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng 32",
    "productCode":"gb00032",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":35,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng 33",
    "productCode":"gb00033",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":25,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng 34",
    "productCode":"gb00034",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":45,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng 35",
    "productCode":"gb00035",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":95,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng 36",
    "productCode":"gb00036",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":21,
    "like":30,
    "price":"Liên Hệ"
}, {
    "productName":"99 Bông Hồng 37",
    "productCode":"gb00037",
    "height":180,
    "weight":500,
    "material":"cotton",
    "color":"Xám",
    "image":"images-gbx/gaubong.png",
    "image1":"images-gbx/gaubongnen.png",
    "image2":"images-gbx/gaubongnen.png",
    "image3":"images-gbx/gaubongnen.png",
    "image4":"images-gbx/gaubongnen.png",
    "lable":["hoa", "new"],
    "evaluate":4.5,
    "inventory":10,
    "sold":23,
    "like":30,
    "price":"Liên Hệ"
}]

// Script hieu ung class ProItems - bắt sự kiện **********************************************

$(document).ready(function(){
    var posThis;
    var posProItems;
    var curentIndex = 0

    function upDateImage(index){
        curentIndex = index
        $(".model__thumb div > img").removeClass("click__img")
        $("#model__img__1").attr("src", $(".model__thumb img").eq(curentIndex -1).attr("src"))
        $(".model__thumb img").eq(curentIndex -1).addClass("click__img")
        
        
    }

    // click gio hang
    $("#giohang").click(function(){
        window.location.href="giohang.html";
    })
    $("#giohang__mobile").click(function(){
        window.location.href="giohang.html";
    })

    // model introduce yourself / gioi thieu ban than
    $("a#menu__contact").click(function(){
        
        $(".model").toggleClass('hidden')
    })

    $(".model__card__img > div > i").click(function(){
        
        $(".model").toggleClass('hidden')
    })

    $(".model__card__close").click(function() {
        $(".model").toggleClass('hidden')
       
    })

    // Model Product Detail

    // open model product detail
    $(".cards__item").on("click", ".card > .card__action > button#cart__action__detail", function() {
        let product__code = $(this).siblings("div.card__ids").find("#card__id").text()
        
        updateProductDetail(product__code);
        $(".model__detail").toggleClass('hidden')
       
    })

    // click mua ngay
    $(".cards__item").on("click", ".card > .card__action > button#cart__action__add__card", function() {
        
        let a = $(this).siblings("div").find("p").text()
        
    })

    $(".model__detail__inner > div > i").click(function() {
        $(".model__detail").toggleClass('hidden')
    })
    $(".model__thumb img").click(function() {
        
        $(".model__thumb img").removeClass("click__img")
        $(this).addClass("click__img")
        var a = $(this).attr("src")
        
        $("#model__img__1").attr("src", a)
    })

    $(".prev").click(function(){
        if(curentIndex == 0 || curentIndex == 1 ){
            curentIndex = $(".model__thumb img").length
        }
        else{
            curentIndex--
        }
        upDateImage(curentIndex)
    })

    $(".next").click(function(){
        if(curentIndex == $(".model__thumb img").length ){
            curentIndex = 1
        }
        else if(curentIndex == 0){
            curentIndex = 2
        }
        else{
            curentIndex++
        }
        upDateImage(curentIndex)
    })


    //  Event menu mobile
    $(".menu__mobile_btn").click(function(){
        $(".menus").removeClass("hidden__menu")
    })

    $(".prev__menu__mobile").click(function(){
        $(".menus").addClass("hidden__menu")
    })


    
    //  

    $("div.items").on("click", "div > div > a", function(){
        event.preventDefault()
        posThis = $(this).position();
        $("div.ProItems").show()
        posProItems = $("div.ProItems").position();

        // láy ma sp
        var a = this.getAttribute("id")
        for(let i = 0; i < data.length; i++){
            if(data[i].productCode == a){

                $("img#imgDetail1").attr("src",data[i].image)
                $("img#imgDetail2").attr("src",data[i].image)
                $("img#imgDetail3").attr("src",data[i].image1)
                $("img#imgDetail4").attr("src",data[i].image2)
                $("img#imgDetail5").attr("src",data[i].image3)
                $("img#imgDetail6").attr({
                    "src":data[i].image4
                })

                $("#NameDetail").text(data[i].productName)
                $("#CodeDetail").text("Mã SP: " + data[i].productCode)
                $("#heightDetail").text("Chiều cao: " + data[i].height + " cm")
                $("#colorDetail").text("Màu sắc: " +data[i].color)
                $("#materialDetail").text("Chất liệu: " + data[i].material)
                $("#weightDetail").text("Trọng lượng: " + data[i].weight)
                $("#PriceDetail").text("Giá bán: " + data[i].price)

            }
        }

        $("html, body").scrollTop(posProItems.top)
    })
    

    $("div.ProItems > a").click(function(){
        $(this).parent().hide()
        $("html, body").scrollTop(posThis.top - posProItems.top)
        

    })
    $("div.thumb").on("click","div > img" ,function(){
        event.preventDefault()

        // lấy giá trị thuộc tính src
        let newImg = $(this).attr("src")
        // cài đặt giá trị mới cho thuộc tính src
        $("#imgDetail1").attr("src", newImg)

        $("div.thumb > div > img").removeClass("on-active")
        $(this).addClass("on-active")
    })

     // product category
     // start category pruduct

     $(".category__prev").click(function(){
        
        next();
        updateCategory();
    })
    $(".category__next").click(function(){
        
        prev();
        updateCategory();
    })
    // end  category pruduct

    // event best - selling product  --- sản phẩm bán chạy nhất

    $(".heading__product__type > ul li").click(function(){
        $(".heading__product__type > ul li").removeClass("boder__bottom__gold")
        $(this).addClass("boder__bottom__gold")

        
    })

    $("#heading__rose").click(function(){
        $(".animation").addClass("hidden")
        $(".rose").removeClass("hidden")
        
    })
    $("#heading__teddy__bear").click(function(){
        $(".animation").addClass("hidden")
        $(".teddy").removeClass("hidden")
        
    })
    $("#heading__chocolate").click(function(){
        $(".animation").addClass("hidden")
        $(".socola").removeClass("hidden")
       
    })
    $("#heading__nail").click(function(){
        $(".animation").addClass("hidden")
        $(".nail").removeClass("hidden")
       
    })

    // end event best - selling product  --- hết sản phẩm bán chạy nhất

    //  *******************  event thêm sản phẩm vào giỏ hàng  **********************



    // *************** hết event thêm sản phẩm vào giỏ hàng  ***********



    //************************** */ Gio hang *****************************
    
    $(".order__detail").on("click", ".order__product > .mobile__order > .products__amount__order > .sum__order", function(){
        
        let amount__order = Number($(this).siblings(".amount__order").text());
        let price__order = Number($(this).parents(".order__product").find(".products__price__order").find("#product__price__order").text());
        let pro__code = $(this).parents(".order__product").find("#product__code__order").text();

        addProductsCard(pro__code);
        
        orderSummary(price__order, 1);
        amount__order = amount__order + 1;
        price__order = price__order * amount__order;

        
        $(this).siblings(".amount__order").text(amount__order);
        $(this).parents(".order__product").find(".products__money__order").find("#product__money__order").text(price__order)
        
    })
    $(".order__detail").on("click", ".order__product > .mobile__order > .products__amount__order > .sub__order", function(){
        
        let amount__order = $(this).siblings(".amount__order").text();
        let price__order = Number($(this).parents(".order__product").find(".products__price__order").find("#product__price__order").text());
        let money__order = Number($(this).parents(".order__product").find(".products__money__order").find("#product__money__order").text());
        let pro__code = $(this).parents(".order__product").find("#product__code__order").text();

        removeProductsCard(pro__code)
        if(amount__order > 1){
            $(this).siblings(".amount__order").text(Number(amount__order) - 1);
            $(this).parents(".order__product").find(".products__money__order").find("#product__money__order").text(money__order - price__order);
            orderSummary(- price__order, -1);
            
        }
        
       
    })

    // click delete product card san pham gio hang


    $(".order__detail").on("click", ".order__product > .dis__flex > .table__name__detail > .delete__order > #product__delete__order", function(){
        console.info("delete")
        
        let delete__price = Number($(this).parents(".order__product").find(".products__money__order").find("#product__money__order").text());
        let delete__amount = Number($(this).parents(".order__product").find(".products__amount__order").find(".amount__order").text());
        $(this).parents(".order__product").remove();
        orderSummary(-delete__price, -delete__amount);
        

        let delete__code = $(this).siblings("#product__code__order").text();
        removeDataCard(delete__code);

    })
    



    // thêm vào giỏ hàng
    
    $(".cards__item").on("click", ".card > .card__cart > i", function(){
        let code = $(this).parents(".card").find("#card__id").text()

        if (sessionStorage.getItem(code)) {
            

            $(this).css("color", "white")
            removeDataCard(code);
            let abc = readDataCard();

            console.info(productCard)
            console.info(abc)

            sessionStorage.removeItem(code);
          } else {
            $(this).css("color", "red")
            addDataCard(code, 1);
            let abc = readDataCard();

            console.info(productCard)
            console.info(abc)

            sessionStorage.setItem(code, 1);
          }
        
        
    })


    $("#dangnhap").click(function(){
        // console.info(amountproduct())
        clearDataCard()

        
    })
    
    $("#buy__more__product").click(function(){
        window.location.href="index.html";
    })
   

    


    //************************** */ het Gio hang *****************************
    
})







//  *********************************   function category product ********************************

// mau vang  #fecd08

var color = ["#ffc7d6", "#fce3c9", "#bcd9f8", "#ffe5cc", "#bedbfb", "#bddaf9", "#bcd9f8", "#f9c0ce", "#e8e8e8", "#c2e7e2"]
var productCard = [];
// var productCard = [{
//     "masp":"gb0001",
//     "soluong":1
// }, {
//     "masp":"gb0003",
//     "soluong":2
// }, {
//     "masp":"gb00011",
//     "soluong":1
// }, {
//     "masp":"gb00017",
//     "soluong":3
// }];

// ************************************  lưu dữ iệu giỏ hàng *****************************

function amountproduct(){
    let proCard = readDataCard();
    let count = 0;
    
    for(let i = 0; i < proCard.length; i++){
       
        count += proCard[i].soluong;
       
    }
    return count;
}

function addProductsCard(productCode){
    let proCard = readDataCard();
    $(document).ready(function(){
        for(let i = 0; i < proCard.length; i++){
            if(productCode == proCard[i].masp){
                proCard[i].soluong += 1;
                console.info(proCard[i].masp)
                console.info(proCard[i].soluong)
            }
        }
        
        localStorage.setItem('dataCard', JSON.stringify(proCard));

        if(amountproduct() != 0){
            sessionStorage.setItem('amountProCard', amountproduct() );
            $(".number__amount").text(sessionStorage.getItem('amountProCard'));
            $(".number__amount__mobile").text(sessionStorage.getItem('amountProCard'));
        }

    })
   
}
function removeProductsCard(productCode){
    let proCard = readDataCard();
    $(document).ready(function(){
        for(let i = 0; i < proCard.length; i++){
            if(productCode == proCard[i].masp){
                proCard[i].soluong -= 1;
                console.info(proCard[i].masp)
                console.info(proCard[i].soluong)
            }
        }
        
        localStorage.setItem('dataCard', JSON.stringify(proCard));

        if(amountproduct() != 0){
            sessionStorage.setItem('amountProCard', amountproduct() );
            $(".number__amount").text(sessionStorage.getItem('amountProCard'));
            $(".number__amount__mobile").text(sessionStorage.getItem('amountProCard'));
        }

    })
   
}


function addDataCard(productCode, amount){
    
    $(document).ready(function(){
        productCard.push({
            "masp":productCode,
            "soluong":amount
        })
        localStorage.setItem('dataCard', JSON.stringify(productCard));

        if(amountproduct() != 0){

            sessionStorage.setItem('amountProCard', amountproduct() );
            $(".number__amount").text(sessionStorage.getItem('amountProCard'));     
            $(".number__amount__mobile").text(sessionStorage.getItem('amountProCard'));            
        }
        

    })
   
}
function readDataCard(){
    let proCard = JSON.parse(localStorage.getItem('dataCard'))
    return proCard;
}
function removeDataCard(productCode){
    let proCard = JSON.parse(localStorage.getItem('dataCard'))
    for(let i = 0; i < proCard.length; i++){
        if(productCode == proCard[i].masp){
            proCard.splice(i, 1)
        }
    }
    if( proCard.length == 0){
        clearDataCard();
    }
    else{
        localStorage.setItem('dataCard', JSON.stringify(proCard));
    }
    
    if(proCard.length != 0){
        sessionStorage.setItem('amountProCard', proCard.length );
        $(".number__amount").text(sessionStorage.getItem('amountProCard'));        
        $(".number__amount__mobile").text(sessionStorage.getItem('amountProCard'));        
    }
    else{
        sessionStorage.clear();
        $(".number__amount").text("0");       
        $(".number__amount__mobile").text("0");       
    }
}
function clearDataCard(){
    localStorage.clear();
}

// ******************* ham gio hang **************

function orderSummary(price001, amount){
    let price = Number($("#price__summary001").text())
    let amount__summary = Number($("#amount__product__summary").text())
    amount__summary += amount;
    price = price + price001;
    
    
    $("#price__summary001").text(price)
    $("#amount__product__summary").text(amount__summary)
    sessionStorage.setItem('amountProCard', amount__summary);
    // console.info("tien " + Number($("#price__summary001").text()))

    let discount__summary = Number($("#discount__summary").text())
    $("#total__summary").text(price - discount__summary)
    
}

function loadProductCard(){
    let proCard = readDataCard();
    if(proCard){ 
        $(document).ready(function(){
            for(let i = 0; i < proCard.length; i++){
                for(let j = 0; j < data.length; j++){
                    if(proCard[i].masp == data[j].productCode){
                        let gia = data[j].price * proCard[i].soluong;
                        
                        $(".order__detail").append(
                            `<div class="order__product ">
                            <div class="dis__flex">
                                <div class="table__name__img">
                                    <img src="${data[j].image}" alt="">
                                </div>
                                <div class="table__name__detail">
                                    <div>
                                        <h4  id="product__name__order"">${data[j].productName}</h4>
                                    </div>
                                    <div class="products__height__order">
                                        <h4>Kích thước:</h4>
                                        <h4 id="product__height__order">${data[j].height}</h4>
                                        <h4>cm</h4>
                                    </div>
                                    <div class="delete__order">
                                        <div id="product__code__order" class="hidden">${data[j].productCode}</div>
                                        <button id="product__delete__order"><i class="fa-solid fa-trash"></i> Xóa</button>
                                    </div>
                                </div>
                            </div>
                            <div class="mobile__order">
                                <div class="products__price__order">
                                    <h4 id="product__price__order">${data[j].price}</h4>
                                    <h4>đ</h4>
                                </div>
                                <div class="products__amount__order">
                                    <span class="sum__order">+</span>
                                    <span class="amount__order">${proCard[i].soluong}</span>
                                    <span class="sub__order">-</span>
                                </div>
                                <div class="products__money__order">
                                    <h4 id="product__money__order">${gia}</h4>
                                    <h4>đ</h4>
                                </div>
                            </div>
                        </div>`
                        )

                        orderSummary(gia, proCard[i].soluong);
                    }
                }
            }
            if(sessionStorage.getItem('amountProCard')){
                $(".number__amount").text(sessionStorage.getItem('amountProCard'));
                $(".number__amount__mobile").text(sessionStorage.getItem('amountProCard'));
            }    
        
        })
    }
}


// *******************product detail **************

function updateProductDetail(id__product){
    for(let i = 0; i < data.length; i++){
        if(data[i].productCode == id__product){
            $("#model__img__1").attr("src", data[i].image)
            $("#model__img__2").attr("src", data[i].image)
            $("#model__img__3").attr("src", data[i].image1)
            $("#model__img__4").attr("src", data[i].image2)
            $("#model__img__5").attr("src", data[i].image3)
            $("#model__img__6").attr("src", data[i].image4)

            $("#model__product_name").text( data[i].productName)
            $("#model__review__score").text( data[i].evaluate)
            $("#model__number_sold").text(data[i].sold)
            $(".model__product__price >h3").text(data[i].price)
            
        }
    }
}

// ************ hàm danh mục sản phẩm****************

function updateCategory(){
    $(document).ready(function(){
        var category__product1 = setTimeout(function(){
            $(".category__item").addClass("animation__slide__left")
            
            for(let i = 0; i < dataSix.length; i++){
                $(`.category__item${i + 1} div.category__item__img`).css("background-color",color[Math.floor(Math.random() * 10)] )
                $(`.category__item__img${i +1}`).attr("src", dataSix[i].image)
                $(`.category__item__name${i +1}`).text( dataSix[i].productName)  
            }
            
        }, 300)
       
        $("div.category__item").removeClass("animation__slide__left")
    })
}
function next(){
    
    dataSix.push(data[dataSixNumber]);
    updateCategory();
    dataSix.shift();
    
    if(dataSixNumber == data.length -1){
        dataSixNumber = 0;
    }
    else{
        dataSixNumber++;
    }
    dataSixNumberPrev = dataSixNumber -7
}

function prev(){
    dataSix.pop();
    dataSix.unshift(data[dataSixNumberPrev]);
    dataSixNumberPrev--;
}


// ************ hết hàm danh mục sản phẩm****************
// *****************hàm sản phẩm bán chạy và sản phẩm mới ************
var  data__hoa = [], data__socola = [], data__gau = [], data__nail = []
var sold__hoa09, sold__gau09, sold__socola09, sold__nail09


// ham lay 9 san pham ban nhieu nhat

function sold__max(array){
    let max;
    let intermediate;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i].sold < array[j].sold){
                max = array[i];
                array[i] = array[j];
                array[j] = max;
            }
        }
    }
    intermediate = array.slice(0,9);
    return intermediate;
}

// ham xap xap san pham theo lable

function subject__data(array, array__subject, lables){
    let intermediate;
    for(let i = 0; i < array.length; i++){
        if(array[i].lable[0] == lables || array[i].lable[2] == lables || array[i].lable[3] == lables ){
            
            array__subject.push(array[i])
        }

    }
    intermediate = sold__max(array__subject);
    return intermediate;
}

// hàm điều khiển bảng new product

function new__product__highlight(){
    $(document).ready(function(){
        setInterval(function(){
            $(".new__products").addClass("animation__heading__new");
            var heading = setTimeout(function(){
                $(".new__products").removeClass("animation__heading__new")
            }, 500)
        },5000)
        
    })
    
}

// hàm điều khiển bảng sản phẩm bán nhiều nhất

function heading__prev(){
    number -=3;
}
function heading__next(){
    number +=3;
}

function product__highlights(sold__max09, subject){
    let number = 0;
    for(let i = 0; i < 3; i++){
        $(`.${subject} > .heading${i + 1} .heading__product__img > img`).attr("src", sold__max09[i + number].image)
        $(`.${subject} > .heading${i + 1} > .heading__product__number > #heading__number`).text(i + number + 1)
        $(`.${subject} > .heading${i + 1} .heading__product__name`).text(sold__max09[i + number].productName)
        $(`.${subject} > .heading${i + 1} .heading__product__price`).text(sold__max09[i + number].price)
        $(`.${subject} > .heading${i + 1} .heading__product__sold`).text(sold__max09[i + number].sold)  
    }
    $(document).ready(function(){
        setInterval(function(){
            if(number == 6){
                number = 0;
            }
            else{
                number += 3;
            }
            $(".animation").addClass("animation__slide__heading")
            for(let i = 0; i < 3; i++){
                $(`.${subject} > .heading${i + 1} .heading__product__img > img`).attr("src", sold__max09[i + number].image)
                $(`.${subject} > .heading${i + 1} > .heading__product__number > #heading__number`).text(i + number + 1)
                $(`.${subject} > .heading${i + 1} .heading__product__name`).text(sold__max09[i + number].productName)
                $(`.${subject} > .heading${i + 1} .heading__product__price`).text(sold__max09[i + number].price)
                $(`.${subject} > .heading${i + 1} .heading__product__sold`).text(sold__max09[i + number].sold)  
                
            }
            
            
            var heading = setTimeout(function(){
                $(".animation").removeClass("animation__slide__heading")
            }, 500)
        }, 5000)
        
    })

}

// ***************** hết hàm sản phẩm bán chạy và sản phẩm mới ************
// *****************hàm  khởi tạo cho card product ***********

function cards__product(){
    $(document).ready(function(){
        for(let i = 0 ; i <data.length; i++){
            $('.cards__item').append(
                ` <div class="card"> 
                <div class="card__heart">
                    <i class='bx bx-heart'></i>
                </div>
                <div class="card__cart">
                    <i class='bx bx-cart-alt'></i>
                </div>
                <div class="card__img">
                    <img src="${data[i].image}" alt="anhgau"/>
                </div>
                <div class="card__title">
                    <h2>${data[i].productName}</h2>
                </div>
                <div class="card__price">
                    <h3>${data[i].price}</h3>
                </div>
                <div class="card__size">
                    <span>Size:</span>
                    <span id="card__size__details">${data[i].height}</span>
                    <span>cm</span>
                    
                </div>
                <div class="card__color">
                    <span>Color:</span>
                    <span id="card__color__details"></span>
                </div>

                <div class="card__action">
                    <div class="card__ids">
                        <span>Mã SP:</span>
                        <p id="card__id">${data[i].productCode}</p>
                    </div>
                    <button id="cart__action__detail" >Chi Tiết</button>
                    <button id="cart__action__add__card">Mua Ngay</button>
                </div>
            </div>`
            )
        }

        
    })
}

function init(){
    sessionStorage.clear();
    // hoi tao card product
    cards__product();
    // start category pruduct

    // khoi tao gio hang
    loadProductCard();
    

    dataSix =data.slice(0, 6)
    updateCategory();
    // screenWidth();
    
    // lay kich thuoc man hinh, kt trinh duyet
    
    // console.info(window.innerWidth)
    // console.info(document.documentElement.clientWidth)
    // console.info(document.getElementsByTagName("body")[0].clientWidth)
    var category__product = setInterval(function(){
        
        next();
    }, 5000)

    //*************** */ end category pruduct ***********

    // *********** khởi tạo sản phẩm bán chạy và sản phẩm mới

    new__product__highlight();
    sold__gau09 = subject__data(data, data__gau, "gau");
    sold__hoa09 = subject__data(data, data__hoa,  "hoa");
    sold__socola09 = subject__data(data, data__socola,  "socola");
    sold__nail09 = subject__data(data, data__nail,  "nail");

    
    product__highlights(sold__gau09, "teddy")
    product__highlights(sold__hoa09, "rose")
    product__highlights(sold__socola09, "socola")
    product__highlights(sold__mail09, "nail");

    // *********** het khởi tạo sản phẩm bán chạy và sản phẩm mới
    
    

}


