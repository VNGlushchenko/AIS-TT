;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    function DashboardCtrl($scope, $filter) {

        var vm = this;
        vm.model = {
            orders: [
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'},
                {date: '2016-05-22T18:46:19Z', country: 'Ukraine', price: 2, status: 'open', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid consequuntur corporis culpa deleniti, doloreius harum illo iure magnam nobis officia optio perferendis, possimus quisquam repellat voluptas! Excepturi, rerum.'},
                {date: '2016-05-19T18:30:29Z', country: 'UAE', price: 14.3, status: 'open', description: 'Ad debitis dolore eaque eligendi, ex explicabo id molestias neque nisi nobis non numquam reprehenderit saepe sunt suscipit veniam voluptate. At debitis eligendi iure quis sunt tempore temporibus unde voluptates!'},
                {date: '2016-06-10T08:26:10Z', country: 'USA', price: 1.9333333333, status: 'pending', description: 'Ad aliquam aut est in recusandae ut velit, voluptate voluptatibus? Accusantium ad commodi dolor dolorem eligendi incidunt ipsa iste nihil quaerat recusandae sit ullam voluptatibus, voluptatum! Aliquid eaque fugiat itaque!'},
                {date: '2016-06-01T13:24:51Z', country: 'Ukraine', price: 5.43, status: 'closed', description: 'Aut beatae, dicta, dolore doloribus, ducimus eius eveniet exercitationem expedita facilis fugit incidunt ipsam labore laudantium non nulla provident quae reiciendis repellat totam vel? Accusantium deleniti error est fuga hic?'},
                {date: '2016-02-15T14:39:21Z', country: 'Israel', price: 4, status: 'pending', description: 'Consectetur delectus eveniet, ex laborum minima nesciunt nisi veniam! Asperiores, cumque, sapiente? Accusantium ad, at aut corporis culpa deleniti dignissimos et explicabo inventore, ipsam mollitia quia quibusdam ullam voluptate voluptates!'}
            ],
            orderParam: 'date',
            reverse: false
        };

        vm.menu = {
            orderBy: orderBy
        };
        vm.pagination = {
            currentPage: 1,
            rowCountTable: vm.model.orders.length,
            pagesCount: 1,
            countPerPage: vm.model.orders.length,
            rowCountChange: rowCountChange,
            nextPage: nextPage,
            previousPage: previousPage,
            firstRowNumber: 0,
            rowCountTableChange: rowCountTableChange
        };

        vm.model.filteredOrders = vm.model.orders;

        function orderBy(param) {
            if (vm.model.orderParam === param) {
                vm.model.reverse = !vm.model.reverse;
            } else {
                vm.model.reverse = false;
            }
            vm.model.orderParam = param;
        }

        function rowCountChange() {
        	vm.pagination.pagesCount = Math.ceil(vm.pagination.rowCountTable / vm.pagination.countPerPage);
        	vm.pagination.currentPage = 1;
        	vm.pagination.firstRowNumber = 0;

        }
        function nextPage() {
        	if(vm.pagination.pagesCount != vm.pagination.currentPage) {
        		vm.pagination.currentPage++;
        		vm.pagination.firstRowNumber += vm.pagination.countPerPage;
        		}
        }
        function previousPage() {
        	if(vm.pagination.currentPage != 1) {
        		vm.pagination.currentPage--;
        		vm.pagination.firstRowNumber -= vm.pagination.countPerPage;
         	}
        }
        function rowCountTableChange() {
            vm.model.filteredOrders = $filter('orderStatus')(vm.model.orders,$scope.ordStatus);
        	vm.pagination.rowCountTable = vm.model.filteredOrders.length;
        	vm.pagination.countPerPage = vm.pagination.rowCountTable;
        	rowCountChange();
        }
        
    }

})();
