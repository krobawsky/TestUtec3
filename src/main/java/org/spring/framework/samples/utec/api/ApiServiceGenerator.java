package org.spring.framework.samples.utec.api;

import java.io.IOException;

import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ApiServiceGenerator {
	
	private static String token = "null";
	
	private static OkHttpClient httpClient = new OkHttpClient.Builder().addInterceptor(new Interceptor() {
	      public Response intercept(Chain chain) throws IOException {
	        Request newRequest  = chain.request().newBuilder()
	            .addHeader("Authorization", "Token " + token)
	            .build();
	        return chain.proceed(newRequest);
	      }
	    }).build();

    private static Retrofit.Builder builder = new Retrofit.Builder()
            .baseUrl(ApiService.API_BASE_URL)
            .addConverterFactory(GsonConverterFactory.create());

    private static Retrofit retrofit;

    private ApiServiceGenerator() {
    }

    public static <S> S createService(Class<S> serviceClass) {
        if(retrofit == null) {
            retrofit = builder.client(httpClient).build();
        }
        return retrofit.create(serviceClass);
    }

}
