(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                     ["productResource",
                         ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;
        // sorting by click
        vm.searchCriteria = "GDN";
        vm.sortProperty = "Price";
        vm.sortDirection = "desc";

        productResource.query({
            $filter: "contains(ProductCode, '" + vm.searchCriteria + "')" +
                     "or contains(ProductName, '"+ vm.searchCriteria +"')",
            $orderby: vm.sortProperty +" "+ vm.sortDirection
            },
            function (data) {
                vm.products = data;
            });

        //{} insert here your querie options
        /*
        productResource.query({
            $filter: "contains(ProductCode, 'GDN') and Price ge 5 and Price le 20",
            $orderby: "Price desc"},
            function (data) {
                vm.products = data;
        });

        vm.searchCriteria = "GDN";
        productResource.query({ search: vm.searchCriteria }, function (data) {
            vm.products = data;
        });
        */
    }
}());
