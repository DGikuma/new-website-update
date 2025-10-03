(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MemberFormStepper",
    ()=>MemberFormStepper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/x-data-grid'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/icons-material/SaveAs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'country-state-city'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const MemberFormStepper = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        memberidno: "",
        groupname: "North Wales Kenya Community",
        groupnumber: "NWKC",
        title: "",
        firstname: "",
        lastname: "",
        middlename: "",
        idtype: "",
        idno: "",
        dateofbirth: "",
        gender: "",
        country: "",
        city: "",
        address: "",
        mobileno: "",
        eimail: "",
        dependantsData: []
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loaderIcon, setLoaderIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDialog, setOpenDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentDependant, setCurrentDependant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dependentCount, setDependentCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const today = new Date().toISOString().split("T")[0];
    const countries = Country.getAllCountries().map((c)=>c.name);
    // Generate member ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemberFormStepper.useEffect": ()=>{
            const now = new Date();
            const uniqueNumber = "".concat(now.getFullYear()).concat(now.getMonth() + 1).concat(now.getDate()).concat(now.getHours()).concat(now.getMinutes()).concat(now.getSeconds()).concat(now.getMilliseconds());
            const lastSixDigits = uniqueNumber.slice(-6);
            setFormData({
                "MemberFormStepper.useEffect": (prev)=>({
                        ...prev,
                        memberidno: "Birdview-M".concat(lastSixDigits)
                    })
            }["MemberFormStepper.useEffect"]);
        }
    }["MemberFormStepper.useEffect"], []);
    // Update dependants when count changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MemberFormStepper.useEffect": ()=>{
            setFormData({
                "MemberFormStepper.useEffect": (prev)=>{
                    const existingDependants = prev.dependantsData;
                    const newDependants = Array.from({
                        length: dependentCount
                    }, {
                        "MemberFormStepper.useEffect.newDependants": (_, idx)=>{
                            return existingDependants[idx] || {
                                id: idx + 1,
                                relationship: "",
                                title: "",
                                firstName: "",
                                middleName: "",
                                surname: "",
                                idtypes: "",
                                idnos: "",
                                dob: "",
                                gendere: "",
                                countrye: "",
                                cities: ""
                            };
                        }
                    }["MemberFormStepper.useEffect.newDependants"]);
                    return {
                        ...prev,
                        dependantsData: newDependants
                    };
                }
            }["MemberFormStepper.useEffect"]);
        }
    }["MemberFormStepper.useEffect"], [
        dependentCount
    ]);
    const handlePhoneChange = (value)=>setFormData((prev)=>({
                ...prev,
                mobileno: value
            }));
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleAddDependant = ()=>setDependentCount((prev)=>prev + 1);
    const handleOpenDialog = (dep)=>{
        setCurrentDependant(dep);
        setOpenDialog(true);
    };
    const handleCloseDialog = ()=>{
        setOpenDialog(false);
        setCurrentDependant(null);
        setErrors({});
    };
    const handleDependantChange = (e)=>{
        const { name, value } = e.target;
        setCurrentDependant((prev)=>prev ? {
                ...prev,
                [name]: value
            } : prev);
    };
    const handleSaveDependant = ()=>{
        if (!currentDependant) return;
        const newErrors = {};
        [
            "relationship",
            "title",
            "firstName",
            "middleName",
            "surname",
            "idtypes",
            "idnos",
            "dob",
            "gendere",
            "countrye",
            "cities"
        ].forEach((field)=>{
            if (!currentDependant[field]) newErrors[field] = "".concat(field, " is required");
        });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setFormData((prev)=>{
            const exists = prev.dependantsData.some((d)=>d.id === currentDependant.id);
            return {
                ...prev,
                dependantsData: exists ? prev.dependantsData.map((d)=>d.id === currentDependant.id ? currentDependant : d) : [
                    ...prev.dependantsData,
                    currentDependant
                ]
            };
        });
        handleCloseDialog();
    };
    const handleSubmit = async ()=>{
        setLoaderIcon(true);
        try {
            const res = await fetch("/api/kenyans-in-north-wales-member-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                toast({
                    title: "Success",
                    description: data.message,
                    type: "success"
                });
                setFormData({
                    memberidno: "",
                    groupname: "North Wales Kenya Community",
                    groupnumber: "NWKC",
                    title: "",
                    firstname: "",
                    lastname: "",
                    middlename: "",
                    idtype: "",
                    idno: "",
                    dateofbirth: "",
                    gender: "",
                    country: "",
                    city: "",
                    address: "",
                    mobileno: "",
                    eimail: "",
                    dependantsData: []
                });
                setDependentCount(0);
                setStep(1);
            } else {
                toast({
                    title: "Error",
                    description: data.error,
                    type: "error"
                });
            }
        } catch (err) {
            toast({
                title: "Error",
                description: err.message,
                type: "error"
            });
        } finally{
            setLoaderIcon(false);
        }
    };
    const columns = [
        {
            field: "id",
            headerName: "No",
            width: 70
        },
        {
            field: "relationship",
            headerName: "Relationship",
            width: 150
        },
        {
            field: "title",
            headerName: "Title",
            width: 100
        },
        {
            field: "firstName",
            headerName: "First Name",
            width: 130
        },
        {
            field: "middleName",
            headerName: "Middle Name",
            width: 130
        },
        {
            field: "surname",
            headerName: "Surname",
            width: 130
        },
        {
            field: "idtypes",
            headerName: "ID Type",
            width: 120
        },
        {
            field: "idnos",
            headerName: "ID Number",
            width: 130
        },
        {
            field: "dob",
            headerName: "DOB",
            width: 120
        },
        {
            field: "gendere",
            headerName: "Gender",
            width: 100
        },
        {
            field: "countrye",
            headerName: "Country",
            width: 130
        },
        {
            field: "cities",
            headerName: "City",
            width: 130
        },
        {
            field: "action",
            headerName: "Action",
            width: 100,
            renderCell: (params)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SaveAsIcon, {
                    style: {
                        cursor: "pointer",
                        color: "#157EBC"
                    },
                    onClick: ()=>handleOpenDialog(params.row)
                }, void 0, false, {
                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex justify-center items-start p-4 bg-gray-50 relative",
        children: [
            loaderIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-white/75",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loaderIcon flex space-x-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-4 h-8 bg-red-500 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-4 h-8 bg-blue-500 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "w-full max-w-4xl shadow-xl rounded-2xl overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.png",
                                    alt: "Logo",
                                    width: 100,
                                    height: 100
                                }, void 0, false, {
                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold mt-2",
                                    children: "Member Registration"
                                }, void 0, false, {
                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            exitBeforeEnter: true,
                            children: [
                                step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        x: 300,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    exit: {
                                        x: -300,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "Member ID",
                                                    value: formData.memberidno,
                                                    readOnly: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "Group Name",
                                                    value: formData.groupname,
                                                    readOnly: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "Group Number",
                                                    value: formData.groupnumber,
                                                    readOnly: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                    label: "Title",
                                                    name: "title",
                                                    value: formData.title,
                                                    onChange: handleChange,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "",
                                                            children: "Select"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "Mr",
                                                            children: "Mr"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "Mrs",
                                                            children: "Mrs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "Miss",
                                                            children: "Miss"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "First Name",
                                                    name: "firstname",
                                                    value: formData.firstname,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "Middle Name",
                                                    name: "middlename",
                                                    value: formData.middlename,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "Surname",
                                                    name: "lastname",
                                                    value: formData.lastname,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                    label: "ID Type",
                                                    name: "idtype",
                                                    value: formData.idtype,
                                                    onChange: handleChange,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "",
                                                            children: "Select"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "Passport",
                                                            children: "Passport"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "National ID",
                                                            children: "National ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "ID Number",
                                                    name: "idno",
                                                    value: formData.idno,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    type: "date",
                                                    label: "Date of Birth",
                                                    name: "dateofbirth",
                                                    max: today,
                                                    value: formData.dateofbirth,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                    label: "Gender",
                                                    name: "gender",
                                                    value: formData.gender,
                                                    onChange: handleChange,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "",
                                                            children: "Select"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "Male",
                                                            children: "Male"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "Female",
                                                            children: "Female"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                                    label: "Country",
                                                    name: "country",
                                                    value: formData.country,
                                                    onChange: handleChange,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                            value: "",
                                                            children: "Select"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        countries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                                                value: c,
                                                                children: c
                                                            }, c, false, {
                                                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "City",
                                                    name: "city",
                                                    value: formData.city,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                                                    label: "Address",
                                                    name: "address",
                                                    value: formData.address,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                                                            children: "Mobile Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            country: "gb",
                                                            value: formData.mobileno,
                                                            onChange: handlePhoneChange,
                                                            inputClass: "w-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    label: "Email",
                                                    name: "eimail",
                                                    value: formData.eimail,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: ()=>setStep(2),
                                                children: "Next →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, "step1", true, {
                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        x: 300,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    exit: {
                                        x: -300,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                    onClick: ()=>setStep(1),
                                                    children: "← Back"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                    onClick: handleAddDependant,
                                                    children: "+ Add Dependant"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        dependentCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-80",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataGrid, {
                                                rows: formData.dependantsData,
                                                columns: columns,
                                                pageSize: 5,
                                                rowsPerPageOptions: [
                                                    5
                                                ],
                                                disableSelectionOnClick: true,
                                                components: {
                                                    Toolbar: GridToolbar
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                lineNumber: 332,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                onClick: handleSubmit,
                                                children: "Submit Form"
                                            }, void 0, false, {
                                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, "step2", true, {
                                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toaster, {}, void 0, false, {
                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            openDialog && currentDependant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                className: "fixed inset-0 m-auto w-3/4 max-w-3xl p-4 bg-white shadow-xl z-50 overflow-auto rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Relationship",
                                name: "relationship",
                                value: currentDependant.relationship,
                                onChange: handleDependantChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "",
                                        children: "Select"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "Spouse",
                                        children: "Spouse"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "Child",
                                        children: "Child"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "Parent",
                                        children: "Parent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Title",
                                name: "title",
                                value: currentDependant.title,
                                onChange: handleDependantChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "",
                                        children: "Select"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "Mr",
                                        children: "Mr"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "Mrs",
                                        children: "Mrs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "Miss",
                                        children: "Miss"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "First Name",
                                name: "firstName",
                                value: currentDependant.firstName,
                                onChange: handleDependantChange
                            }, void 0, false, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Middle Name",
                                name: "middleName",
                                value: currentDependant.middleName,
                                onChange: handleDependantChange
                            }, void 0, false, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Surname",
                                name: "surname",
                                value: currentDependant.surname,
                                onChange: handleDependantChange
                            }, void 0, false, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "ID Type",
                                name: "idtypes",
                                value: currentDependant.idtypes,
                                onChange: handleDependantChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "",
                                        children: "Select"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "Passport",
                                        children: "Passport"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "National ID",
                                        children: "National ID"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "ID Number",
                                name: "idnos",
                                value: currentDependant.idnos,
                                onChange: handleDependantChange
                            }, void 0, false, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "Date of Birth",
                                name: "dob",
                                type: "date",
                                max: today,
                                value: currentDependant.dob,
                                onChange: handleDependantChange
                            }, void 0, false, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 378,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Gender",
                                name: "gendere",
                                value: currentDependant.gendere,
                                onChange: handleDependantChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "",
                                        children: "Select"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "Male",
                                        children: "Male"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "Female",
                                        children: "Female"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Country",
                                name: "countrye",
                                value: currentDependant.countrye,
                                onChange: handleDependantChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                        value: "",
                                        children: "Select"
                                    }, void 0, false, {
                                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    countries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                                            value: c,
                                            children: c
                                        }, c, false, {
                                            fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                label: "City",
                                name: "cities",
                                value: currentDependant.cities,
                                onChange: handleDependantChange
                            }, void 0, false, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                onClick: handleSaveDependant,
                                children: "Save Dependant"
                            }, void 0, false, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variant: "ghost",
                                onClick: handleCloseDialog,
                                className: "ml-2",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                        lineNumber: 394,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
                lineNumber: 355,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/forms/KenyansInNorthWalesMemberForm/page.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MemberFormStepper, "b8kydZIdZ4fHZWLLmkLHtGLCyus=");
_c = MemberFormStepper;
var _c;
__turbopack_context__.k.register(_c, "MemberFormStepper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_forms_KenyansInNorthWalesMemberForm_page_tsx_4f8dddcf._.js.map