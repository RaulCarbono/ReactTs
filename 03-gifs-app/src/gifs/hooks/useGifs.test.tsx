import { act,renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";

describe('useGifs', () => {

    test('should return default values and methods', () => {
        const {result} = renderHook(() => useGifs()) 
        
        expect(result.current.previousTerms.length).toBe(0)
        expect(result.current.gifs.length).toBe(0)
        expect(result.current.handlerSearch).toBeDefined();
        expect(result.current.handleTermClicked).toBeDefined();
    }) 


    test('should return a list of gifs', async () =>{
        const {result} = renderHook(() => useGifs())
        
       
        await act(async () => {
           await result.current.handlerSearch('goku')
        })

        expect(result.current.gifs.length).toBe(10)
    })

    test('should return a list of gifs when handleTermClicked is called', async () => {
        const {result} = renderHook(() => useGifs())

        await act(async () => {
            await result.current.handleTermClicked('hola')
        })
        
        expect(result.current.gifs.length).toBe(10)
     })

     test('should return a list of gifs from cache', async () => {
         const {result} = renderHook(() => useGifs())
         
         await act(async () => {
             await result.current.handleTermClicked('hola')
            })
            
            expect(result.current.gifs.length).toBe(10)
            
            vi.spyOn(gifActions, 'getGifsByQuery')
            .mockRejectedValue(new Error('This is my custom error'))

         await act(async () => {
             await result.current.handleTermClicked('hola')
            })
            
            expect(result.current.gifs.length).toBe(10)
     })

     test('should return no more than 8 previous terms', async() => {
        const {result} = renderHook(() => useGifs())

        vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([])

        await act(async () => {
            await result.current.handlerSearch('goku1')
        })
         await act(async () => {
            await result.current.handlerSearch('goku2')
        })
         await act(async () => {
            await result.current.handlerSearch('goku3')
        }) 
        await act(async () => {
            await result.current.handlerSearch('goku4')
        })
         await act(async () => {
            await result.current.handlerSearch('goku5')
        })
         await act(async () => {
            await result.current.handlerSearch('goku6')
        })
         await act(async () => {
            await result.current.handlerSearch('goku7')
        })
         await act(async () => {
            await result.current.handlerSearch('goku8')
        })
         await act(async () => {
            await result.current.handlerSearch('goku9')
        })
      
        expect(result.current.previousTerms.length).toBe(7)
        expect(result.current.previousTerms).toStrictEqual([
        'goku9', 'goku8',
        'goku7', 'goku6',
        'goku5', 'goku4',
        'goku3'
        ])
     })
}) 