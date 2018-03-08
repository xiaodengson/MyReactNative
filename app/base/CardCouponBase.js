/**
 * Created by zjq on 2017/7/13.
 */
export default class CardCouponBase{
      static  TYPE_CARD   = 0;
      static  TYPE_COUPON = 1;


      key;
      code;	// 卡券编码
      customerId;//会员ID
      name;//名称
      qrcodeUrl;//二维码url
      notice;//使用提醒
      color;//背景颜色RGB
      effectiveDate;//有效时间
      coverShow;//封面背景是否显示 0—不显示 1—显示
      servicePhone;//客服电话
      brandName;//商户名称
      shopLogoUrl;//商户logo url
      frontImageUrl;//正面背景图
      cardOrCoupon;//判断是卡还是券
      typeName;//类型名称
      type;
      couponSubTitle;	//卡或券展示内容
}
