!function(){var e;window.germanized=window.germanized||{},window.germanized.admin=window.germanized.admin||{},e=jQuery,window.germanized.admin.shipping_providers={params:{},$wrapper:"",init:function(){var i=germanized.admin.shipping_providers;i.params=wc_gzd_admin_shipping_providers_params,i.$wrapper=e(".wc-gzd-shipping-providers"),e(document).on("click",".wc-gzd-shipping-provider-delete",i.onRemoveProvider).on("change",".wc-gzd-shipping-providers input.wc-gzd-shipping-provider-activated-checkbox",this.onChangeProviderStatus),e(window).on("load",(function(){e(document).on("updateMoveButtons","table.wc-gzd-shipping-providers",i.onChangeSort)})),e("table.wc-gzd-shipping-providers tbody").sortable({items:"tr",cursor:"move",axis:"y",handle:"td.sort",scrollSensitivity:40,helper:function(i,r){return r.children().each((function(){e(this).width(e(this).width())})),r.css("left","0"),r},start:function(e,i){i.item.css("background-color","#f6f6f6")},stop:function(e,i){i.item.removeAttr("style"),i.item.trigger("updateMoveButtons")}})},onChangeSort:function(){var i=e(this).find('input[name="provider_order[]"]').map((function(){return e(this).val()})).get(),r=germanized.admin.shipping_providers,n={action:"woocommerce_gzd_sort_shipping_provider",order:i,security:r.getParams().sort_shipping_provider_nonce};r.doAjax(n)},onChangeProviderStatus:function(){var i=germanized.admin.shipping_providers,r=e(this),n=i.getProviderName(r),o=r.parents("td").find(".woocommerce-gzd-input-toggle"),d={action:"woocommerce_gzd_edit_shipping_provider_status",enable:r.is(":checked")?"yes":"no",provider:n};window.onbeforeunload="",o.addClass("woocommerce-input-toggle--loading"),i.doAjax(d,i.onChangeProviderStatusSucess)},onChangeProviderStatusSucess:function(e){var i=germanized.admin.shipping_providers.$wrapper.find('tr[data-shipping-provider="'+e.provider+'"]').find(".woocommerce-gzd-input-toggle");i.removeClass("woocommerce-input-toggle--loading"),i.removeClass("woocommerce-input-toggle--enabled, woocommerce-input-toggle--disabled"),"yes"===e.activated?i.addClass("woocommerce-input-toggle--enabled"):i.addClass("woocommerce-input-toggle--disabled")},getProviderName:function(e){return germanized.admin.shipping_providers,e.data("shipping-provider")?e.data("shipping-provider"):e.parents("tr").length>0&&e.parents("tr").data("shipping-provider")},onRemoveProvider:function(){var i=germanized.admin.shipping_providers,r=i.getProviderName(e(this));return r&&window.confirm(i.getParams().i18n_remove_shipping_provider_notice)&&i.removeProvider(r),!1},removeProvider:function(e){var i=germanized.admin.shipping_providers,r={action:"woocommerce_gzd_remove_shipping_provider",provider:e,security:i.getParams().remove_shipping_provider_nonce};i.block(),i.doAjax(r,i.onRemoveProviderSuccess)},onRemoveProviderSuccess:function(e){var i=germanized.admin.shipping_providers.$wrapper.find('tr[data-shipping-provider="'+e.provider+'"]');i.length>0&&i.remove()},block:function(){germanized.admin.shipping_providers.$wrapper.block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},unblock:function(){germanized.admin.shipping_providers.$wrapper.unblock()},doAjax:function(i,r,n){var o=germanized.admin.shipping_providers,d=o.params.ajax_url,a=o.$wrapper;r=r||o.onAjaxSuccess,n=n||o.onAjaxError,i.hasOwnProperty("security")||(i.security=o.params.edit_shipping_providers_nonce),e.ajax({type:"POST",url:d,data:i,success:function(e){e.success?(r.apply(a,[e]),o.unblock()):(n.apply(a,[e]),o.unblock())},error:function(e){n.apply(a,[e])},dataType:"json"})},onAjaxError:function(e){},onAjaxSuccess:function(e){},getParams:function(){return germanized.admin.shipping_providers.params}},e(document).ready((function(){germanized.admin.shipping_providers.init()})),((window.germanizedShipments=window.germanizedShipments||{}).static=window.germanizedShipments.static||{})["admin-shipping-providers"]={}}();