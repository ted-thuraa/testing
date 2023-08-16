<template>
    <div class="relative px-4 w-full">
        <div class="relative w-full">
            <form
                @submit.prevent="updateFormData"
                class="relative flex flex-col mb-3 w-full h-full text-gray-950"
            >
                <div class="mb-5">
                    <div>
                        <div>
                            <legend
                                class="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Form type
                            </legend>
                            <p class="mt-1 text-sm leading-6 text-gray-600">
                                These are delivered via SMS to your mobile
                                phone.
                            </p>
                        </div>
                    </div>
                </div>
                <listbox
                    :formtype="formtype"
                    @updateformtype="updateformtype"
                />

                <div v-if="formtype === 'Contact form'" class="mt-10">
                    <div class="mb-2">
                        <p class="p-0 m-0 font-semibold text-base">
                            Contact form
                        </p>
                    </div>
                    <div class="mb-5">
                        <p class="p-0 text-[14px] text-slate-700">
                            Receive messages in your inbox
                        </p>
                    </div>
                    <div class="mb-5">
                        <div
                            class="relative overflow-x-auto sm:rounded-lg mb-4"
                        >
                            <table
                                class="w-full text-sm text-left text-gray-500"
                            >
                                <caption
                                    class="text-lg font-semibold text-left text-gray-900 bg-white"
                                >
                                    Fields
                                    <p
                                        class="mt-1 text-sm font-normal text-gray-500"
                                    >
                                        Use fields to collect a specific type of
                                        information. Mark a field required to
                                        make it mandatory for visitors to
                                        complete.
                                    </p>
                                </caption>
                                <thead class="text-xs text-gray-700 uppercase">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Field
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            required?
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Name
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isNameRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value="true"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_name"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Email address
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isEmailRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_email"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Mobile
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isMobileRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_mobile"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Message
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isMessageRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_message"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Country
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isCountryRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_country"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-if="formtype === 'Poll'" class="mt-10">
                    <PollFormDataEditor
                        :poll_data="poll_data"
                        @pollDataChange="pollDataChange"
                    />
                </div>
                <div v-if="formtype === 'Waiting List'" class="mt-10">
                    <div class="mb-2">
                        <p class="p-0 m-0 font-semibold text-base">
                            Waiting list
                        </p>
                    </div>
                    <div class="mb-5">
                        <p class="p-0 text-[14px] text-slate-700">
                            Validate new ideas by receiving interested clients
                            right in your inbox or google sheets
                        </p>
                    </div>
                    <div class="mb-5">
                        <div
                            class="relative overflow-x-auto sm:rounded-lg mb-4"
                        >
                            <table
                                class="w-full text-sm text-left text-gray-500"
                            >
                                <caption
                                    class="text-lg font-semibold text-left text-gray-900 bg-white"
                                >
                                    Fields
                                    <p
                                        class="mt-1 text-sm font-normal text-gray-500"
                                    >
                                        Use fields to collect a specific type of
                                        information. Mark a field required to
                                        make it mandatory for visitors to
                                        complete.
                                    </p>
                                </caption>
                                <thead class="text-xs text-gray-700 uppercase">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Field
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            required?
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Name
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isNameRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value="true"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_name"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Email address
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isEmailRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_email"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-if="formtype === 'Feedback form'" class="mt-10">
                    <div class="mb-2">
                        <p class="p-0 m-0 font-semibold text-base">
                            Feedback form
                        </p>
                    </div>
                    <div class="mb-5">
                        <p class="p-0 text-[14px] text-slate-700">
                            Receive feedback in your inbox
                        </p>
                    </div>
                    <div class="mb-5">
                        <div
                            class="relative overflow-x-auto sm:rounded-lg mb-4"
                        >
                            <table
                                class="w-full text-sm text-left text-gray-500"
                            >
                                <caption
                                    class="text-lg font-semibold text-left text-gray-900 bg-white"
                                >
                                    Fields
                                    <p
                                        class="mt-1 text-sm font-normal text-gray-500"
                                    >
                                        Use fields to collect a specific type of
                                        information. Mark a field required to
                                        make it mandatory for visitors to
                                        complete.
                                    </p>
                                </caption>
                                <thead class="text-xs text-gray-700 uppercase">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Field
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            required?
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Name
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isNameRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value="true"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_name"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Email address
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isEmailRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_email"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Mobile
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isMobileRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_mobile"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Message
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isMessageRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_message"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Country
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isCountryRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_country"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-if="formtype === 'Mailing List'" class="mt-10">
                    <div class="mb-2">
                        <p class="p-0 m-0 font-semibold text-base">
                            Mailinglist
                        </p>
                    </div>
                    <div class="mb-5">
                        <p class="p-0 text-[14px] text-slate-700">
                            Let your audience subscribe to your mailing list
                        </p>
                    </div>
                    <div class="mb-5">
                        <div
                            class="relative overflow-x-auto sm:rounded-lg mb-4"
                        >
                            <table
                                class="w-full text-sm text-left text-gray-500"
                            >
                                <caption
                                    class="text-lg font-semibold text-left text-gray-900 bg-white"
                                >
                                    Fields
                                    <p
                                        class="mt-1 text-sm font-normal text-gray-500"
                                    >
                                        Use fields to collect a specific type of
                                        information. Mark a field required to
                                        make it mandatory for visitors to
                                        complete.
                                    </p>
                                </caption>
                                <thead class="text-xs text-gray-700 uppercase">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Field
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            required?
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Name
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isNameRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value="true"
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_name"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Email address
                                        </th>
                                        <td class="px-6 py-4">
                                            <input
                                                v-model="isEmailRequired"
                                                checked
                                                id="checked-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                        </td>
                                        <td class="px-6 py-4">
                                            <label
                                                class="relative inline-flex items-center cursor-pointer"
                                            >
                                                <input
                                                    v-model="get_email"
                                                    type="checkbox"
                                                    value="true"
                                                    class="sr-only peer"
                                                    checked
                                                />
                                                <div
                                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                                                ></div>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-if="formtype === 'Rating'" class="mt-10">
                    <RatingFormeditor
                        :link="link"
                        @change="updateRatingFormData"
                    />
                </div>
                <div v-if="formtype === 'Custom'" class="mt-10">
                    <h3
                        class="text-2xl font-semibold flex items-center justify-between"
                    >
                        Questions

                        <!-- Add new question -->
                        <button
                            type="button"
                            @click="addQuestion()"
                            class="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            Add Question
                        </button>
                        <!--/ Add new question -->
                    </h3>
                    <div
                        v-if="!questions.length"
                        class="text-center text-gray-600"
                    >
                        You don't have any questions created
                    </div>
                    <div
                        v-for="(question, index) in questions"
                        :key="question.id"
                    >
                        <CustomFormEditor
                            :question="question"
                            :index="index"
                            @change="questionChange"
                            @addQuestion="addQuestion"
                            @deleteQuestion="deleteQuestion"
                        />
                    </div>
                </div>

                <div class="mt-12 mb-5">
                    <p class="p-0 m-0 font-semibold text-base"></p>
                    <p class="p-0 text-[14px] text-slate-700"></p>
                    <div class="mt-4">
                        <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Aditional description(optional)</label
                        >
                        <textarea
                            v-model="additionaldescription"
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="more description..."
                        ></textarea>
                        <label
                            for="message"
                            class="block mt-4 mb-2 text-sm font-medium text-gray-900"
                            >Thankyou message(optional)</label
                        >
                        <input
                            v-model="thankyoutext"
                            type="text"
                            id="email-address-icon"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Thanks for Subscribing"
                        />
                    </div>
                </div>
                <div class="mb-5">
                    <p class="p-0 m-0 font-semibold text-base">Email</p>
                    <p class="p-0 text-[14px] text-slate-700">
                        Send responses to your inbox
                    </p>
                    <div class="mt-4">
                        <label
                            for="email-address-icon"
                            class="block mb-2 text-sm font-medium text-gray-900 d"
                            >Your Email</label
                        >
                        <div class="relative">
                            <div
                                class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
                            >
                                <svg
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                                    />
                                    <path
                                        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                                    />
                                </svg>
                            </div>
                            <input
                                v-model="responcesEmail"
                                type="text"
                                id="email-address-icon"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                placeholder="name@flowbite.com"
                            />
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <p class="p-0 m-0 font-semibold text-base">Google Sheets</p>
                    <p class="p-0 text-[14px] text-slate-700">
                        Send responses to google sheets
                    </p>
                    <div class="mt-4">
                        <label
                            for="email-address-icon"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Your google sheets token</label
                        >
                        <div class="relative">
                            <input
                                v-model="googlesheetsToken"
                                type="text"
                                id="email-address-icon"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="XAiOiJKV1QiLCJ..."
                            />
                        </div>
                    </div>
                </div>

                <!-- expirydate -->
                <div class="mb-5">
                    <label
                        for="formexpiry_date"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Expiry Date
                    </label>
                    <input
                        type="date"
                        name="expiry_date"
                        id="expiry_date"
                        v-model="formexpiry_date"
                        autocomplete=""
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <!-- expirydate -->

                <button
                    type="submit"
                    class="mt-8 text-xl flex items-center justify-center w-full py-3 rounded-full text-white font-semibold bg-gray-800 hover:bg-gray-950"
                >
                    <span>Save</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import Listbox from "./Listbox.vue";
import RatingFormeditor from "./RatingFormeditor.vue";
import CustomFormEditor from "./CustomFormEditor.vue";
import PollFormDataEditor from "./PollFormDataEditor.vue";
import ToggleSwitch from "./ToggleSwitch.vue";
import { v4 as uuidv4 } from "uuid";
import { watch, ref, onMounted, toRefs } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
    link: Object,
    //selectedId: { type: Number, default: 0 },
    //selectedStr: { type: String, default: "" },
});

const { link } = toRefs(props);
const model = ref(JSON.parse(JSON.stringify(props.link)));

let description = ref("");
let formtype = ref("");
let formexpiry_date = ref(null);
let isNameRequired = ref(false);
let get_name = ref(false);
let isEmailRequired = ref(false);
let get_email = ref(false);
let isMobileRequired = ref(false);
let get_mobile = ref(false);
let isMessageRequired = ref(false);
let get_message = ref(false);
let isCountryRequired = ref(false);
let get_country = ref(false);
let poll_data = ref({ poll_question: "", poll_options: [] });
let ratingformdata = ref([]);
let questions = ref([]);
let responcesEmail = ref("");
let googlesheetsToken = ref("");
let additionaldescription = ref("");
let thankyoutext = ref("");
let errors = ref(null);

function updateformtype(payload) {
    console.log(payload.name);
    formtype.value = payload.name;
    console.log(formtype);
}

function updateRatingFormData(payload) {
    console.log(payload);
    ratingformdata.value = payload;
}

function addQuestion(index) {
    const newQuestion = {
        id: uuidv4(),
        type: "text",
        question: "",
        description: null,
        data: {},
    };
    questions.value.splice(index, 0, newQuestion);
}

function deleteQuestion(question) {
    questions.value = questions.value.filter((q) => q !== question);
}

function questionChange(question) {
    questions.value = questions.value.map((q) => {
        if (q.id === question.id) {
            return JSON.parse(JSON.stringify(question));
        }
        return q;
    });
    console.log(questions);
}
function pollDataChange(poll) {
    poll_data.value = JSON.parse(JSON.stringify(poll));
    console.log(poll_data);
}

onMounted(async () => {
    console.log(link.value);
    description.value = props.link.data?.description || "";
    formtype.value = props.link.data?.formtype || "";
    formexpiry_date.value = props.link.data?.formexpiry_date || null;
    isNameRequired.value = props.link.data?.isNameRequired || false;
    get_name.value = props.link.data?.get_name || false;
    isEmailRequired.value = props.link.data?.isEmailRequired || false;
    get_email.value = props.link.data?.get_email || false;
    isMobileRequired.value = props.link.data?.isMobileRequired || false;
    get_mobile.value = props.link.data?.get_mobile || false;
    isMessageRequired.value = props.link.data?.isMessageRequired || false;
    get_message.value = props.link.data?.get_message || false;
    isCountryRequired.value = props.link.data?.isCountryRequired || false;
    get_country.value = props.link.data?.get_country || false;
    responcesEmail.value = props.link.data?.responcesEmail || "";
    googlesheetsToken.value = props.link.data?.googlesheetsToken || "";
    thankyoutext.value = props.link.data?.thankyoutext || "";
    poll_data.value = props.link.data?.poll_data || {
        poll_question: "",
        poll_options: [],
    };
    questions.value = props.link.data?.customformquestions || [];
});

const updateFormData = async () => {
    cleanUnwantedData(formtype.value);
    console.log(model.value.data);
    model.value.data = {
        description: description.value,
        formtype: formtype.value,
        formexpiry_date: formexpiry_date.value,
        isNameRequired: isNameRequired.value,
        get_name: get_name.value,
        isEmailRequired: isEmailRequired.value,
        get_email: get_email.value,
        isMobileRequired: isMobileRequired.value,
        get_mobile: get_mobile.value,
        isMessageRequired: isMessageRequired.value,
        get_message: get_message.value,
        isCountryRequired: isCountryRequired.value,
        get_country: get_country.value,
        responcesEmail: responcesEmail.value,
        googlesheetsToken: googlesheetsToken.value,
        thankyoutext: thankyoutext.value,
        additionaldescription: additionaldescription.value,
        poll_data: poll_data.value,
        ratingformdata: ratingformdata.value,
        ratingformdata: ratingformdata.value,
        customformquestions: questions.value,
    };
    console.log(model);
    try {
        await store.dispatch("updateStartupData", model.value);
        await store.dispatch("getAllLinks");
    } catch (error) {
        console.log(error);
    }
};

async function cleanUnwantedData(category) {
    switch (category) {
        case "Contact form":
            questions.value = [];
            ratingformdata.value = [];
            poll_data.value = { poll_question: "", poll_options: [] };
            return;
        case "Poll":
            questions.value = [];
            ratingformdata.value = [];
            return;
        case "Waiting List":
            questions.value = [];
            ratingformdata.value = [];
            poll_data.value = { poll_question: "", poll_options: [] };
            return;
        case "Feedback form":
            questions.value = [];
            ratingformdata.value = [];
            poll_data.value = { poll_question: "", poll_options: [] };
            return;
        case "Mailing List":
            questions.value = [];
            ratingformdata.value = [];
            poll_data.value = { poll_question: "", poll_options: [] };
            return;
        case "Rating":
            poll_data.value = { poll_question: "", poll_options: [] };
            questions.value = [];
            return;
        case "Custom":
            poll_data.value = { poll_question: "", poll_options: [] };
            ratingformdata.value = [];
            return;
        // Handle other categories here if needed
        default:
            return; // Replace 'DefaultComponent' with a fallback component name
    }
}
</script>

<style></style>
