package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import com.google.android.material.button.MaterialButton;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    TextView resultadoTv,procedimientoTv;
    MaterialButton botonBorrar,botonAbrirParentesis,botonCerrarParentesis;
    MaterialButton botonDivision,BotonMultiplicacion,BotonSuma,BotonResta,BotonIgual;
    MaterialButton boton0,boton1,boton2,boton3,boton4,boton5,boton6,boton7,boton8,boton9;
    MaterialButton botonAC,botonPunto;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        resultadoTv = findViewById(R.id.resultado_tv);
        procedimientoTv = findViewById(R.id.procedimiento_tv);

        asignarId(botonBorrar,R.id.boton_borrar);
        asignarId(botonAbrirParentesis,R.id.boton_abrir_parentesis);
        asignarId(botonCerrarParentesis,R.id.boton_cerrar_parentesis);
        asignarId(botonDivision,R.id.boton_division);
        asignarId(BotonMultiplicacion,R.id.boton_multiplicacion);
        asignarId(BotonSuma,R.id.boton_suma);
        asignarId(BotonResta,R.id.boton_resta);
        asignarId(BotonIgual,R.id.boton_igual);
        asignarId(boton0,R.id.boton_0);
        asignarId(boton1,R.id.boton_1);
        asignarId(boton2,R.id.boton_2);
        asignarId(boton3,R.id.boton_3);
        asignarId(boton4,R.id.boton_4);
        asignarId(boton5,R.id.boton_5);
        asignarId(boton6,R.id.boton_6);
        asignarId(boton7,R.id.boton_7);
        asignarId(boton8,R.id.boton_8);
        asignarId(boton9,R.id.boton_9);
        asignarId(botonAC,R.id.boton_ac);
        asignarId(botonPunto,R.id.boton_punto);





    }

    void asignarId(MaterialButton btn,int id){
        btn = findViewById(id);
        btn.setOnClickListener(this);
    }


    @Override
    public void onClick(View view) {
        MaterialButton boton =(MaterialButton) view;
        String textoBoton = boton.getText().toString();
        String Calcular = procedimientoTv.getText().toString();

        if(textoBoton.equals("AC")){
            procedimientoTv.setText("");
            resultadoTv.setText("0");
            return;
        }
        if(textoBoton.equals("=")){
            procedimientoTv.setText(resultadoTv.getText());
            return;
        }
        if(textoBoton.equals("⌫")){
            Calcular = Calcular.substring(0,Calcular.length()-1);
        }else{
            Calcular = Calcular+textoBoton;
        }
        procedimientoTv.setText(Calcular);

        String resultadoFinal = CalcularResultado(Calcular);

        if(!resultadoFinal.equals("Err")){
            resultadoTv.setText(resultadoFinal);
        }

    }

    String CalcularResultado(String data){
        try{
            Context context  = Context.enter();
            context.setOptimizationLevel(-1);
            Scriptable scriptable = context.initStandardObjects();
            String resultadoFinal =  context.evaluateString(scriptable,data,"Javascript",1,null).toString();
            if(resultadoFinal.endsWith(".0")){
                resultadoFinal = resultadoFinal.replace(".0","");
            }
            return resultadoFinal;
        }catch (Exception e){
            return "Err";
        }
    }

}