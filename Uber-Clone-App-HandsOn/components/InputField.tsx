import { InputFieldProps } from "@/types/type";
import { KeyboardAvoidingView, TouchableWithoutFeedback, View, Text, Image, Platform, TextInput, Keyboard } from "react-native";

const InputField = ({label, labelStyle, placeholder, icon, secureTextEntry = false, containerStyle, inputStyle, iconStyle, className, ...props}: InputFieldProps) => {
    return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="my-1 w-full">
                <Text className={`text-lg font-JakartaSemiBold  ${labelStyle}`}>{label}</Text>
                <View className={`flex flex-row justify-start items-center relative bg-neutral-100, rounded-full border brder-neutral-100 focus:border-primary-500 ${containerStyle}`}>
                    {icon && (<Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle} `}/> )}
                    <TextInput className={`rounded-full p-2 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`} secureTextEntry={secureTextEntry} {...props} />

                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}

export default InputField;