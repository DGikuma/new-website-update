(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/forms/StaffMedicalForm/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroui/card/dist/chunk-O24IAYCG.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$R2M62V4J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@heroui/theme/dist/chunk-R2M62V4J.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const StaffMedicalForm = ()=>{
    _s();
    const today = new Date().toISOString().split("T")[0];
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        policyScheme: "Birdview Microinsurance Medical Scheme",
        relationship: "Principal",
        staffId: "",
        title: "",
        firstname: "",
        middleName: "",
        lastname: "",
        idtype: "",
        idno: "",
        dateofbirth: "",
        gender: "",
        country: "Kenya",
        city: "",
        address: "",
        mobileno: "",
        eimail: "",
        dependantsData: [
            {
                id: 1,
                relationship: "",
                title: "",
                firstName: "",
                middleName: "",
                surname: "",
                idtypes: "",
                idnos: "",
                dob: "",
                gendere: ""
            }
        ]
    });
    const [loaderIcon, setLoaderIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dependentCount, setDependentCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [currentDependant, setCurrentDependant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openModal, setOpenModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync dependants count
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffMedicalForm.useEffect": ()=>{
            setFormData({
                "StaffMedicalForm.useEffect": (prev)=>{
                    const newDependants = Array.from({
                        length: dependentCount
                    }, {
                        "StaffMedicalForm.useEffect.newDependants": (_, idx)=>{
                            return prev.dependantsData[idx] || {
                                id: idx + 1,
                                relationship: "",
                                title: "",
                                firstName: "",
                                middleName: "",
                                surname: "",
                                idtypes: "",
                                idnos: "",
                                dob: "",
                                gendere: ""
                            };
                        }
                    }["StaffMedicalForm.useEffect.newDependants"]);
                    return {
                        ...prev,
                        dependantsData: newDependants
                    };
                }
            }["StaffMedicalForm.useEffect"]);
        }
    }["StaffMedicalForm.useEffect"], [
        dependentCount
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handlePhoneChange = (value)=>{
        setFormData((prev)=>({
                ...prev,
                mobileno: value
            }));
    };
    const handleAddDependant = ()=>{
        if (formData.dependantsData.length >= 7) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$R2M62V4J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "⚠️ Limit reached",
                description: "You can only add up to 7 dependants.",
                variant: "warning"
            });
            return;
        }
        setDependentCount((prev)=>prev + 1);
    };
    const handleOpenModal = (dep)=>{
        setCurrentDependant(dep);
        setOpenModal(true);
    };
    const handleCloseModal = ()=>{
        setCurrentDependant(null);
        setErrors({});
        setOpenModal(false);
    };
    const handleChangeDep = (e)=>{
        if ("target" in e) {
            const { name, value } = e.target;
            setCurrentDependant((prev)=>prev && {
                    ...prev,
                    [name]: value
                });
            setErrors((prev)=>({
                    ...prev,
                    [name]: ""
                }));
        } else {
            const { name, value } = e;
            setCurrentDependant((prev)=>prev && {
                    ...prev,
                    [name]: value
                });
            setErrors((prev)=>({
                    ...prev,
                    [name]: ""
                }));
        }
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
            "gendere"
        ].forEach((key)=>{
            if (!currentDependant[key]) newErrors[key] = "".concat(key, " is required");
        });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setFormData((prev)=>({
                ...prev,
                dependantsData: prev.dependantsData.map((d)=>d.id === currentDependant.id ? currentDependant : d)
            }));
        handleCloseModal();
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoaderIcon(true);
        try {
            const res = await fetch("/api/medicalStaff_form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$R2M62V4J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "✅ Success",
                    description: data.message,
                    color: "success",
                    variant: "solid",
                    placement: "top-right"
                });
                handleReset();
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$R2M62V4J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                    title: "❌ Error",
                    description: data.error,
                    color: "danger",
                    variant: "solid",
                    placement: "top-right"
                });
            }
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$R2M62V4J$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])({
                title: "❌ Error",
                description: err.message,
                color: "danger",
                variant: "solid",
                placement: "top-right"
            });
        } finally{
            setLoaderIcon(false);
        }
    };
    const handleReset = ()=>{
        setFormData({
            policyScheme: "Birdview Microinsurance Medical Scheme",
            relationship: "Principal",
            staffId: "",
            title: "",
            firstname: "",
            middleName: "",
            lastname: "",
            idtype: "",
            idno: "",
            dateofbirth: "",
            gender: "",
            country: "Kenya",
            city: "",
            address: "",
            mobileno: "",
            eimail: "",
            dependantsData: [
                {
                    id: 1,
                    relationship: "",
                    title: "",
                    firstName: "",
                    middleName: "",
                    surname: "",
                    idtypes: "",
                    idnos: "",
                    dob: "",
                    gendere: ""
                }
            ]
        });
        setDependentCount(1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center px-4  bg-[url('/images/form-bg.jpg')] bg-cover bg-center bg-no-repeat",
        children: [
            loaderIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-white/70",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
                }, void 0, false, {
                    fileName: "[project]/app/forms/StaffMedicalForm/page.tsx",
                    lineNumber: 275,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/forms/StaffMedicalForm/page.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$card$2f$dist$2f$chunk$2d$O24IAYCG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                className: "w-full max-w-3xl shadow-xl rounded-2xl p-6 bg-white/90 backdrop-blur-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center my-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/logo.jpeg",
                            alt: "Logo",
                            width: 180,
                            height: 50
                        }, void 0, false, {
                            fileName: "[project]/app/forms/StaffMedicalForm/page.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/forms/StaffMedicalForm/page.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-center mb-6",
                        children: "Staff Medical Detail Forms"
                    }, void 0, false, {
                        fileName: "[project]/app/forms/StaffMedicalForm/page.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/forms/StaffMedicalForm/page.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/forms/StaffMedicalForm/page.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StaffMedicalForm, "USdzsAoMOwGgV7e6n6h4E/k7A6k=");
_c = StaffMedicalForm;
const __TURBOPACK__default__export__ = StaffMedicalForm;
var _c;
__turbopack_context__.k.register(_c, "StaffMedicalForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@heroui/theme/dist/chunk-R2M62V4J.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toast",
    ()=>toast,
    "toastRegion",
    ()=>toastRegion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@heroui/theme/dist/chunk-GQT3YUX3.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@heroui/theme/dist/chunk-TX3FPB7D.mjs [app-client] (ecmascript)");
;
;
// src/components/toast.ts
var toastRegion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: "relative z-[100]"
    },
    variants: {
        disableAnimation: {
            false: {
                base: ""
            },
            true: {
                base: [
                    "data-[placement=bottom-right]:bottom-0 data-[placement=bottom-right]:right-0 w-full px-2 sm:w-auto sm:px-0 data-[placement=bottom-right]:fixed data-[placement=bottom-right]:flex data-[placement=bottom-right]:flex-col",
                    "data-[placement=bottom-left]:bottom-0 data-[placement=bottom-left]:left-0 w-full px-2 sm:w-auto sm:px-0 data-[placement=bottom-left]:fixed data-[placement=bottom-left]:flex data-[placement=bottom-left]:flex-col",
                    "data-[placement=bottom-center]:bottom-0 data-[placement=bottom-center]:fixed w-full px-2 sm:w-auto sm:px-0 data-[placement=bottom-center]:flex data-[placement=bottom-center]:flex-col data-[placement=bottom-center]:left-1/2 data-[placement=bottom-center]:-translate-x-1/2",
                    "data-[placement=top-right]:top-0 data-[placement=top-right]:right-0 w-full px-2 sm:w-auto sm:px-0 data-[placement=top-right]:fixed data-[placement=top-right]:flex data-[placement=top-right]:flex-col",
                    "data-[placement=top-left]:top-0 data-[placement=top-left]:left-0 w-full px-2 sm:w-auto sm:px-0 data-[placement=top-left]:fixed data-[placement=top-left]:flex data-[placement=top-left]:flex-col",
                    "data-[placement=top-center]:top-0 data-[placement=top-center]:fixed w-full px-2 sm:w-auto sm:px-0 data-[placement=top-center]:flex data-[placement=top-center]:flex-col data-[placement=top-center]:left-1/2 data-[placement=top-center]:-translate-x-1/2"
                ]
            }
        }
    },
    defaultVariants: {
        disableAnimation: false
    }
});
var toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$TX3FPB7D$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "flex gap-x-4 items-center",
            "group",
            "cursor-pointer",
            "relative",
            "z-50",
            "box-border",
            "outline-solid outline-transparent",
            "p-3 sm:mx-1",
            "my-1",
            "w-full sm:w-[356px]",
            "min-h-4",
            "before:content-['']",
            "before:absolute",
            "before:left-0",
            "before:right-0",
            "data-[placement=bottom-right]:before:h-[var(--top-extension,16px)]",
            "data-[placement=bottom-left]:before:h-[var(--top-extension,16px)]",
            "data-[placement=bottom-center]:before:h-[var(--top-extension,16px)]",
            "data-[placement=bottom-right]:before:top-[calc(-1*var(--top-extension,16px))]",
            "data-[placement=bottom-left]:before:top-[calc(-1*var(--top-extension,16px))]",
            "data-[placement=bottom-center]:before:top-[calc(-1*var(--top-extension,16px))]",
            "before:z-[-1]",
            "before:pointer-events-auto",
            "before:bg-transparent",
            "after:content-['']",
            "after:absolute",
            "after:left-0",
            "after:right-0",
            "data-[placement=bottom-right]:after:h-[var(--bottom-extension,16px)]",
            "data-[placement=bottom-left]:after:h-[var(--bottom-extension,16px)]",
            "data-[placement=bottom-center]:after:h-[var(--bottom-extension,16px)]",
            "data-[placement=bottom-right]:after:bottom-[calc(-1*var(--bottom-extension,16px))]",
            "data-[placement=bottom-left]:after:bottom-[calc(-1*var(--bottom-extension,16px))]",
            "data-[placement=bottom-center]:after:bottom-[calc(-1*var(--bottom-extension,16px))]",
            "after:z-[-1]",
            "after:pointer-events-auto",
            "after:bg-transparent",
            "transform-gpu",
            "will-change-transform",
            "backface-visibility-hidden"
        ],
        wrapper: [
            "flex flex-col gap-y-0"
        ],
        title: [
            "text-sm",
            "me-4",
            "font-medium",
            "text-foreground"
        ],
        description: [
            "text-sm",
            "me-4",
            "text-default-500"
        ],
        icon: [
            "w-6 h-6 flex-none fill-current"
        ],
        loadingComponent: [
            "w-6 h-6 flex-none fill-current"
        ],
        content: [
            "flex flex-grow flex-row gap-x-4 items-center relative"
        ],
        progressTrack: [
            "absolute inset-0 pointer-events-none bg-transparent overflow-hidden"
        ],
        progressIndicator: [
            "h-full bg-default-400 opacity-20"
        ],
        motionDiv: [
            "fixed",
            "px-4 sm:px-0",
            "data-[placement=bottom-right]:bottom-0 data-[placement=bottom-right]:right-0 data-[placement=bottom-right]:mx-auto w-full sm:data-[placement=bottom-right]:w-max mb-1 sm:data-[placement=bottom-right]:mr-2",
            "data-[placement=bottom-left]:bottom-0 data-[placement=bottom-left]:left-0 data-[placement=bottom-left]:mx-auto w-full sm:data-[placement=bottom-left]:w-max mb-1 sm:data-[placement=bottom-left]:ml-2",
            "data-[placement=bottom-center]:bottom-0 data-[placement=bottom-center]:left-0 data-[placement=bottom-center]:right-0 w-full sm:data-[placement=bottom-center]:w-max sm:data-[placement=bottom-center]:mx-auto",
            "data-[placement=top-right]:top-0 data-[placement=top-right]:right-0 data-[placement=top-right]:mx-auto w-full sm:data-[placement=top-right]:w-max sm:data-[placement=top-right]:mr-2",
            "data-[placement=top-left]:top-0 data-[placement=top-left]:left-0 data-[placement=top-left]:mx-auto w-full sm:data-[placement=top-left]:w-max sm:data-[placement=top-left]:ml-2",
            "data-[placement=top-center]:top-0 data-[placement=top-center]:left-0 data-[placement=top-center]:right-0 w-full sm:data-[placement=top-center]:w-max sm:data-[placement=top-center]:mx-auto"
        ],
        closeButton: [
            "opacity-0 group-hover:opacity-100",
            "transform-gpu",
            "transition-all duration-200 ease-out",
            "will-change-opacity will-change-transform",
            "p-0 group-hover:pointer-events-auto w-6 h-6 min-w-4 absolute -right-2 -top-2 items-center justify-center bg-transparent text-default-400 hover:text-default-600 border border-3 border-transparent",
            "data-[hidden=true]:hidden"
        ],
        closeIcon: [
            "rounded-full w-full h-full p-0.5 border border-default-400 bg-default-100"
        ]
    },
    variants: {
        size: {
            sm: {
                icon: "w-5 h-5",
                loadingComponent: "w-5 h-5"
            },
            md: {},
            lg: {}
        },
        variant: {
            flat: "bg-content1 border border-default-100",
            solid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.default,
            bordered: "bg-background border border-default-200"
        },
        color: {
            default: "",
            foreground: {
                progressIndicator: "h-full opacity-20 bg-foreground-400"
            },
            primary: {
                progressIndicator: "h-full opacity-20 bg-primary-400"
            },
            secondary: {
                progressIndicator: "h-full opacity-20 bg-secondary-400"
            },
            success: {
                progressIndicator: "h-full opacity-20 bg-success-400"
            },
            warning: {
                progressIndicator: "h-full opacity-20 bg-warning-400"
            },
            danger: {
                progressIndicator: "h-full opacity-20 bg-danger-400"
            }
        },
        radius: {
            none: {
                base: "rounded-none",
                progressTrack: "rounded-none"
            },
            sm: {
                base: "rounded-small",
                progressTrack: "rounded-small"
            },
            md: {
                base: "rounded-medium",
                progressTrack: "rounded-medium"
            },
            lg: {
                base: "rounded-large",
                progressTrack: "rounded-large"
            },
            full: {
                base: "rounded-full",
                closeButton: "-top-px -right-px",
                progressTrack: "rounded-full"
            }
        },
        disableAnimation: {
            true: {
                closeButton: "transition-none",
                base: "data-[animation=exiting]:opacity-0 transition-none"
            },
            false: {
                closeButton: "transition-all ease-out duration-200",
                base: [
                    "data-[toast-exiting=true]:transform-gpu",
                    "data-[toast-exiting=true]:will-change-transform",
                    "data-[toast-exiting=true]:transition-all",
                    "data-[toast-exiting=true]:ease-out",
                    "data-[toast-exiting=true]:data-[placement=bottom-right]:translate-x-full",
                    "data-[toast-exiting=true]:data-[placement=bottom-left]:-translate-x-full",
                    "data-[toast-exiting=true]:data-[placement=bottom-center]:translate-y-full",
                    "data-[toast-exiting=true]:data-[placement=top-right]:translate-x-full",
                    "data-[toast-exiting=true]:data-[placement=top-left]:-translate-x-full",
                    "data-[toast-exiting=true]:data-[placement=top-center]:-translate-y-full",
                    "data-[toast-exiting=true]:opacity-0",
                    "data-[toast-exiting=true]:duration-300",
                    "data-[toast-exiting=true]:ease-out"
                ]
            }
        },
        shadow: {
            none: {
                base: "shadow-none"
            },
            sm: {
                base: "shadow-small"
            },
            md: {
                base: "shadow-medium"
            },
            lg: {
                base: "shadow-large"
            }
        }
    },
    defaultVariants: {
        size: "md",
        variant: "flat",
        radius: "md",
        shadow: "sm"
    },
    compoundVariants: [
        // flat and color
        {
            variant: "flat",
            color: "foreground",
            class: {
                base: "bg-foreground text-background",
                closeButton: "text-foreground-400 hover:text-foreground-600",
                closeIcon: "border border-foreground-400 bg-foreground-100",
                title: "text-background-600",
                description: "text-background-500"
            }
        },
        {
            variant: "flat",
            color: "primary",
            class: {
                base: "bg-primary-50 text-primary-600 border-primary-100",
                closeButton: "text-primary-400 hover:text-primary-600",
                closeIcon: "border border-primary-400 bg-primary-100",
                title: "text-primary-600",
                description: "text-primary-500"
            }
        },
        {
            variant: "flat",
            color: "secondary",
            class: {
                base: "bg-secondary-50 text-secondary-600 border-secondary-100",
                closeButton: "text-secondary-400 hover:text-secondary-600",
                closeIcon: "border border-secondary-400 bg-secondary-100",
                title: "text-secondary-600",
                description: "text-secondary-500"
            }
        },
        {
            variant: "flat",
            color: "success",
            class: {
                base: "bg-success-50 text-success-600 border-success-100",
                closeButton: "text-success-400 hover:text-success-600",
                closeIcon: "border border-success-400 bg-success-100",
                title: "text-success-600",
                description: "text-success-500"
            }
        },
        {
            variant: "flat",
            color: "warning",
            class: {
                base: "bg-warning-50 text-warning-600 border-warning-100",
                closeButton: "text-warning-400 hover:text-warning-600",
                closeIcon: "border border-warning-400 bg-warning-100",
                title: "text-warning-600",
                description: "text-warning-500"
            }
        },
        {
            variant: "flat",
            color: "danger",
            class: {
                base: "bg-danger-50 text-danger-600 border-danger-100",
                closeButton: "text-danger-400 hover:text-danger-600",
                closeIcon: "border border-danger-400 bg-danger-100",
                title: "text-danger-600",
                description: "text-danger-500"
            }
        },
        // bordered and color
        {
            variant: "bordered",
            color: "foreground",
            class: {
                base: "bg-foreground border-foreground-400 text-background",
                closeButton: "text-foreground-400 hover:text-foreground-600",
                closeIcon: "border border-foreground-400 bg-foreground-100",
                title: "text-background-600",
                description: "text-background-500"
            }
        },
        {
            variant: "bordered",
            color: "primary",
            class: {
                base: "border-primary-400 text-primary-600",
                closeButton: "text-primary-400 hover:text-primary-600",
                closeIcon: "border border-primary-400 bg-primary-100",
                title: "text-primary-600",
                description: "text-primary-500"
            }
        },
        {
            variant: "bordered",
            color: "secondary",
            class: {
                base: "border-secondary-400 text-secondary-600",
                closeButton: "text-secondary-400 hover:text-secondary-600",
                closeIcon: "border border-secondary-400 bg-secondary-100",
                title: "text-secondary-600",
                description: "text-secondary-500"
            }
        },
        {
            variant: "bordered",
            color: "success",
            class: {
                base: "border-success-400 text-success-600",
                closeButton: "text-success-400 hover:text-success-600",
                closeIcon: "border border-success-400 bg-success-100",
                title: "text-success-600",
                description: "text-success-500"
            }
        },
        {
            variant: "bordered",
            color: "warning",
            class: {
                base: "border-warning-400 text-warning-600",
                closeButton: "text-warning-400 hover:text-warning-600",
                closeIcon: "border border-warning-400 bg-warning-100",
                title: "text-warning-600",
                description: "text-warning-500"
            }
        },
        {
            variant: "bordered",
            color: "danger",
            class: {
                base: "border-danger-400 text-danger-600",
                closeButton: "text-danger-400 hover:text-danger-600",
                closeIcon: "border border-danger-400 bg-danger-100",
                title: "text-danger-600",
                description: "text-danger-500"
            }
        },
        // solid and color
        {
            variant: "solid",
            color: "foreground",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.foreground,
                closeButton: "text-foreground-400 hover:text-foreground-600",
                closeIcon: "border border-foreground-400 bg-foreground-100",
                title: "text-background",
                description: "text-background"
            }
        },
        {
            variant: "solid",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.primary,
                closeButton: "text-primary-400 hover:text-primary-600",
                closeIcon: "border border-primary-400 bg-primary-100",
                title: "text-primary-foreground",
                description: "text-primary-foreground"
            }
        },
        {
            variant: "solid",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.secondary,
                closeButton: "text-secondary-400 hover:text-secondary-600",
                closeIcon: "border border-secondary-400 bg-secondary-100",
                title: "text-secondary-foreground",
                description: "text-secondary-foreground"
            }
        },
        {
            variant: "solid",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.success,
                closeButton: "text-success-400 hover:text-success-600",
                closeIcon: "border border-success-400 bg-success-100",
                title: "text-success-foreground",
                description: "text-success-foreground"
            }
        },
        {
            variant: "solid",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.warning,
                closeButton: "text-warning-400 hover:text-warning-600",
                closeIcon: "border border-warning-400 bg-warning-100",
                title: "text-warning-foreground",
                description: "text-warning-foreground"
            }
        },
        {
            variant: "solid",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroui$2f$theme$2f$dist$2f$chunk$2d$GQT3YUX3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.danger,
                closeButton: "text-danger-400 hover:text-danger-600",
                closeIcon: "border border-danger-400 bg-danger-100",
                title: "text-danger-foreground",
                description: "text-danger-foreground"
            }
        }
    ]
});
;
}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 16),
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", [])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_db018334._.js.map