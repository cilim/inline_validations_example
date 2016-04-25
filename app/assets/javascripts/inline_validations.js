$(function () {
    $(".js_inline_validate .js_validate_me").on('blur', function () {
        field = this;
        field_name = this.id.replace('post_', '');
        field_value = $(field).val();
        url = $(field).closest('form').data('validateUrl') + '?' + field_name + '=' + field_value;
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json'
        }).success(function (data, textStatus, jqXHR) {
            field = $("." + 'js_post_' + data['field_name']);
            field_group = field.closest('.field');
            field_group.find(".help-block").remove();
            if (data['valid']) {
                field_group.removeClass('field_with_errors');
                field_group.addClass('success-block');
            }
            else {
                field_group.addClass('field_with_errors');
                field_group.append("<span class='help-block'>" + data['message'] + "</span>")
            }
        })
    });
});