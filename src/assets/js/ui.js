$(function(){

    // sidenav
    $("#sidenav li.has-depth-nav > a").on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        

        if($this.hasClass('is-active')) {
            $this.removeClass('is-active');
        } else {
            $("#sidenav li.has-depth-nav > a").removeClass('is-active');
            $this.addClass('is-active');
        }
    });

    // .case-view
    $(".case-view button").on('click', function(e){
        e.preventDefault();

        var $this = $(this), id = $this.attr('id');

        if(id == 'toggle-darkmode') {
            $("body").toggleClass('dark-mode');
        }
    });

    // flat picker - date
    flatpickr(".date", {
        locale: "ko",
        dateFormat: "Y.m.d"
    });

    // flat picker - period
    flatpickr(".period-date", {
        locale: "ko",
        mode: "range",
        showMonths: 2,
        dateFormat: "Y.m.d"
    })

    // flat picker - month
    flatpickr(".month", {
        locale: "ko",
        plugins: [
            new monthSelectPlugin({
                dateFormat: "Y.m",
            })
        ]
    });

    // data tables 1
    $('#data-table-1').DataTable({
        searching: false,
        // paging: false,
        ordering: false,
        pageLength: 10,
        // scrollCollapse: true,
        // scrollY: '200px',
        language: {
            info: '총 _TOTAL_ 개의 행 중 _START_ 행 부터 _END_ 행 까지',
            infoEmpty: '데이터가 없습니다.',
            emptyTable: '데이터가 없습니다.',
            thousands: ',',
            lengthMenu: '총 _MENU_ 행씩 보기',
            loadingRecords: '로딩 중',
            processing: '동작 중',
            zeroRecords: '검색 결과 없음',
            paginate: {
                first: '처음',
                last: '마지막',
                next: '다음',
                previous: '이전'
            },
            search: '검색'
        }
    });

    // data tables 2
    $('#data-table-2').DataTable({
        searching: false,
        paging: false,
        ordering: false,
        pageLength: 10,
        // scrollCollapse: true,
        // scrollY: '200px',
        language: {
            info: '총 _TOTAL_ 개의 행 중 _START_ 행 부터 _END_ 행 까지',
            infoEmpty: '데이터가 없습니다.',
            emptyTable: '데이터가 없습니다.',
            thousands: ',',
            lengthMenu: '총 _MENU_ 행씩 보기',
            loadingRecords: '로딩 중',
            processing: '동작 중',
            zeroRecords: '검색 결과 없음',
            paginate: {
                first: '처음',
                last: '마지막',
                next: '다음',
                previous: '이전'
            },
            search: '검색'
        }
    });

    // data table scroll
    $(".data-table-scroll").each(function(i, o){
        var $this = $(o);
        var columsWidth = $(o).data('width') || '';
        var scrollYHeight = $(o).data('height') || '';
        console.log(columsWidth);

        var columsWidthArr = [];
        if(columsWidth != '') {
            var columsWidthSplit = columsWidth.split(',');
            for (var i = 0; i < columsWidthSplit.length; i++) {
                columsWidthArr.push({ width: columsWidthSplit[i].trim() + 'px' });
            }
        }

        console.log(columsWidthArr);

        var dataTableOpt = {};
        dataTableOpt.searching = false;
        dataTableOpt.paging = false;
        dataTableOpt.ordering = false;
        dataTableOpt.scrollCollapse = true;

        if(scrollYHeight != '') dataTableOpt.scrollY = scrollYHeight;
        if(columsWidthArr != '') dataTableOpt.columns = columsWidthArr;
        
        console.log(dataTableOpt);

        $this.DataTable(dataTableOpt)
    });
});